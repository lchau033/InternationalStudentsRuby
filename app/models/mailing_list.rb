class MailingList < ApplicationRecord
  validates :name, :email, presence: true

  after_create :subscribe_user_to_mailing_list

  private

  def subscribe_user_to_mailing_list
    SubscribeUserToMailingListJob.perform_later(self)
  end
end

