Rails.application.routes.draw do
  default_url_options :host => "https://navigating-canada-dev.herokuapp.com"

  mount Ckeditor::Engine => '/ckeditor'
  namespace :admin do
    resources :mailing_lists
    resources :users
    resources :conversations
  end

  resources :users
  resources :sessions
  resources :mailing_lists
  resources :reset_passwords, only: [:new, :create, :update, :edit]
  resources :conversations do
    resources :messages
  end
  resources :pages
  resources :reset_passwords, only: [:new, :create, :update, :edit]
  resources :stories

  resources :posts do
    resources :upvotes, only: [:create, :destroy]
  end

  resources :posts do
    resources :downvotes, only: [:create, :destroy]
  end

  scope "(:locale)", :locale => /en|fr/ do

    # page
      root 'sessions#log_in'

      get '/content',to: 'pages#content', as: :content

      get '', to: 'pages#index', as: :index

      get '/timeline', to: 'pages#timeline', as: :timeline

      get '/chat_admin', to: 'pages#chat_admin', as: :chat_admin

      get '/stopConversation', to: 'pages#stopConversation', as: :stop_conversation


    #users

      get '/profile/edit', to: 'users#profile_edit', as: :profile_edit

      get '/profile', to: 'users#profile_show', as: :profile


    #sessions

      post '/log_in', to: 'sessions#create', as: :sessions_create

      get '/log_in', to: 'sessions#log_in', as: :log_in

      delete '/log_out', to: 'sessions#destroy', as: :log_out

      get '/log_out', to: 'sessions#log_out', as: :my_log_out


    #forums

      mount Thredded::Engine => '/forum'

      get '/forum',to: 'pages#forum', as: :forum

      get '/forum/preferences/edit', as: :notification_edit

       post "oauth/callback" => "oauths#callback"
       get "oauth/callback" => "oauths#callback" # for use with Facebook
       get "oauth/:provider" => "oauths#oauth", :as => :auth_at_provider
     # delete "oauth/:provider" => "oauths#destroy", :as => :delete_oauth

      root 'todos#index'

  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
