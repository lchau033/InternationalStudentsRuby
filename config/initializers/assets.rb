# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( admin.css )
Rails.application.config.assets.precompile += %w( page_specific/content.css )
Rails.application.config.assets.precompile += %w( page_specific/dropdown.css )
Rails.application.config.assets.precompile += %w( page_specific/index.css )
Rails.application.config.assets.precompile += %w( page_specific/timeline.css )
Rails.application.config.assets.precompile += %w( page_specific/todolist.css )
Rails.application.config.assets.precompile += %w( page_specific/adminPage.css )
Rails.application.config.assets.precompile += %w( page_specific/country_select.css )
Rails.application.config.assets.precompile += %w( page_specific/avatar.css )
Rails.application.config.assets.precompile += %w( page_specific/profile.css )
Rails.application.config.assets.precompile += %w( page_specific/chat.css )
Rails.application.config.assets.precompile += %w( page_specific/forum.css )
Rails.application.config.assets.precompile += %w( page_specific/blog.css )
Rails.application.config.assets.precompile += %w( imported/style.css )
Rails.application.config.assets.precompile += %w( global.css )
Rails.application.config.assets.precompile += %w( index.css )
Rails.application.config.assets.precompile += %w( ckeditor/* )



Rails.application.config.assets.precompile += %w( chat.js )
Rails.application.config.assets.precompile += %w( user.js )
Rails.application.config.assets.precompile += %w( my_chat.js )
Rails.application.config.assets.precompile += %w( private_pub.js )
Rails.application.config.assets.precompile += %w( conversation_show.js )
Rails.application.config.assets.precompile += %w( update_chat.js )
Rails.application.config.assets.precompile += %w( jquery_ujs.js )
Rails.application.config.assets.precompile += %w( index.js )
Rails.application.config.assets.precompile += %w( toastr.js )
Rails.application.config.assets.precompile += %w( calendar_date_select/* )



# Images
Rails.application.config.assets.precompile << /\.(?:png|jpg|jpeg|gif)\z/

# Fonts
Rails.application.config.assets.precompile << /\.(?:svg|eot|woff|ttf)\z/