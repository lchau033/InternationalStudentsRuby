# frozen_string_literal: true

module Thredded
  # A controller for managing {PrivatePost}s.
  class PrivatePostsController < Thredded::ApplicationController
    include ActionView::RecordIdentifier
    include NewPrivatePostParams

    helper_method :topic
    after_action :update_user_activity

    after_action :verify_authorized

    def new
      @post_form = Thredded::PrivatePostForm.new(
        user: thredded_current_user, topic: parent_topic, post_params: new_private_post_params
      )
      authorize_creating @post_form.post
    end

    def create
      @post_form = Thredded::PrivatePostForm.new(
        user: thredded_current_user, topic: parent_topic, post_params: new_private_post_params
      )
      authorize_creating @post_form.post
      if @post_form.save
        redirect_to post_path(@post_form.post, user: thredded_current_user)
      else
        render :new
      end
    end

    def edit
      @post_form = Thredded::PrivatePostForm.for_persisted(post)
      authorize @post_form.post, :update?
      return redirect_to(canonical_topic_params) unless params_match?(canonical_topic_params)
      render
    end

    def update
      authorize post, :update?
      post.update_attributes(post_params.except(:user, :ip))

      redirect_to post_path(post, user: thredded_current_user)
    end

    def destroy
      authorize post, :destroy?
      post.destroy!

      redirect_back fallback_location: topic_url(topic),
                    notice: I18n.t('thredded.posts.deleted_notice')
    end

    def mark_as_unread
      authorize post, :read?
      page = post.page
      post.mark_as_unread(thredded_current_user, page)
      after_mark_as_unread # customization hook
    end

    def quote
      authorize_reading post
      render plain: Thredded::ContentFormatter.quote_content(post.content)
    end

    private

    def canonical_topic_params
      { private_topic_id: topic.slug }
    end

    def after_mark_as_unread
      redirect_to private_topics_path
    end

    def topic
      post.postable
    end

    def parent_topic
      Thredded::PrivateTopic
        .includes(:private_users)
        .friendly
        .find(params[:private_topic_id])
    end

    def post
      @post ||= Thredded::PrivatePost.find(params[:id])
    end

    def current_page
      params[:page].nil? ? 1 : params[:page].to_i
    end
  end
end
