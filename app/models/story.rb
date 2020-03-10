class Story < ApplicationRecord
  mount_uploader :image, ImageUploader

  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" },
                    :path => ":rails_root/public/system/:attachment/:id/:style/:filename",
                    :url => ":rails_root/public/system/:attachment/:id/:style/:filenam"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  validates_with AttachmentSizeValidator, attributes: :image, less_than: 1.megabytes

  private
end
