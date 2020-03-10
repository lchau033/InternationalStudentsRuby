# frozen_string_literal: true

module Thredded
  class Post < ActiveRecord::Base
    include Thredded::PostCommon
    include Thredded::ContentModerationState

    belongs_to :user,
               class_name: Thredded.user_class_name,
               inverse_of: :thredded_posts,
               **(Thredded.rails_gte_51? ? { optional: true } : {})
    belongs_to :messageboard,
               counter_cache: true
    belongs_to :postable,
               class_name:    'Thredded::Topic',
               inverse_of:    :posts,
               counter_cache: true
    belongs_to :user_detail,
               inverse_of:    :posts,
               primary_key:   :user_id,
               foreign_key:   :user_id,
               counter_cache: true,
               **(Thredded.rails_gte_51? ? { optional: true } : {})
    has_many :moderation_records,
             class_name: 'Thredded::PostModerationRecord',
             dependent: :nullify
    has_many :user_notifications,
             class_name: 'Thredded::UserPostNotification',
             dependent: :destroy
    has_one :last_moderation_record, -> { order_newest_first },
            class_name: 'Thredded::PostModerationRecord'
    has_many :upvotes,
             class_name: 'Upvote',
             dependent: :destroy
    has_many :downvotes,
             class_name: 'Downvote',
             dependent: :destroy
    validates :messageboard_id, presence: true

    after_commit :update_parent_last_user_and_time_from_last_post, on: %i[create destroy]
    after_commit :update_parent_last_user_and_time_from_last_post_if_moderation_state_changed, on: :update

    after_commit :auto_follow_and_notify, on: %i[create update]

    # @param [Integer] per_page
    # @param [Thredded.user_class] user
    def page(per_page: self.class.default_per_page, user:)
      readable_posts = PostPolicy::Scope.new(user, postable.posts).resolve
      calculate_page(readable_posts, per_page)
    end

    def score
      upvotes.count - downvotes.count
    end

    def private_topic_post?
      false
    end

    # @return [ActiveRecord::Relation<Thredded.user_class>] users that can read this post.
    def readers
      Thredded.user_class.thredded_messageboards_readers([messageboard])
    end

    private

    def auto_follow_and_notify
      return unless user
      # need to do this in-process so that it appears to them immediately
      if first_post_in_topic? ? Thredded.auto_follow_when_creating_topic : Thredded.auto_follow_when_posting_in_topic
        UserTopicFollow.create_unless_exists(user.id, postable_id, :posted)
      end
      # everything else can happen later
      AutoFollowAndNotifyJob.perform_later(id)
    end

    def update_parent_last_user_and_time_from_last_post
      postable.update_last_user_and_time_from_last_post!
      messageboard.update_last_topic!
    end

    def update_parent_last_user_and_time_from_last_post_if_moderation_state_changed
      update_parent_last_user_and_time_from_last_post if previous_changes.include?('moderation_state')
    end
  end
end
