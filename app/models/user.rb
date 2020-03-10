class User < ApplicationRecord
  authenticates_with_sorcery!

  mount_uploader :image, ImageUploader
  before_destroy :destroy_user

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" },
                    :path => ":rails_root/public/system/:attachment/:id/:style/:filename",
                    :url => ":rails_root/public/system/:attachment/:id/:style/:filename"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :image, less_than: 1.megabytes

  authenticates_with_sorcery! do |config|
    config.authentications_class = Authentication
  end

  has_many :authentications, :dependent => :destroy
  accepts_nested_attributes_for :authentications

  validates :password, length: { minimum: 8 }, :if => :password
  validates :password, confirmation: true , :if => :password
  validates :email, uniqueness: true, email_format: { message: 'has invalid format' }
  validates :name, uniqueness: true
  validates_processing_of :image

  def country_name(country_code)
    c = ISO3166::Country.new(country_code)
    c.to_s
  end

  def destroy_user
    Conversation.where("sender_id = ? OR recipient_id = ?", self.id, self.id).destroy_all
    Downvote.where("user_id = ?", self.id).destroy_all
    Upvote.where("user_id = ?", self.id).destroy_all
    Thredded::Post.where("user_id = ?",self.id).destroy_all
    Thredded::Topic.where("user_id = ?", self.id).destoy_all
  end

  private

  def has_linked_facebook
    authentications.where(provider: 'facebook').present?
  end

  def has_linked_twitter
    authentications.where(provider: 'twitter').present?
  end

end

