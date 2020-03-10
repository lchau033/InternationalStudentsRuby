class AddimageToStories < ActiveRecord::Migration[5.0]
  def change
    add_attachment :stories, :image
  end
end
