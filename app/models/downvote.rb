class Downvote < ApplicationRecord
  belongs_to :post, class_name: 'Thredded::Post', foreign_key: :post_id
  belongs_to :user

  validates :post, uniqueness: { scope: :user }
  validates :user, uniqueness: { scope: :post }
end
