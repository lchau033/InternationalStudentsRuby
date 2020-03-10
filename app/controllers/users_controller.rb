class UsersController < ApplicationController

  #  Create a new user by calling function new() this new user will be permitted in create()
  def register
    # Load template users/register
    @user = User.new()
  end

  # Create and permits a new user
  def create
    @tempUser = User.find_by_email(params[:user][:email])
    if @tempUser.nil?
      @tempUser = User.find_by_name(params[:user][:name].to_s)
      if @tempUser.nil?
        @user = User.new(user_params)
        if params[:user][:password] = params[:user][:password_confirmation]
          if @user.save
            login(params[:user][:email], params[:user][:password])
            redirect_to forum_path
          else
            flash.now[:warning] =  @user.errors.full_messages.to_sentence
            render 'sessions/log_in'
          end
        else
          flash.now[:warning] =  @user.errors.full_messages.to_sentence
          render 'sessions/log_in'
        end
      else
        flash.now[:warning] =  'Name has already been taken.'
        flash.keep(:warning)
        @user = User.new()
        @user.email = params[:user][:email]
        render 'sessions/log_in'
      end
    else
      flash.now[:warning] =  'Email has already been taken.'
      flash.keep(:warning)
      @user = User.new()
      @user.name = params[:user][:name]
      render 'sessions/log_in'
    end
  end

  #  Edit the current user the changes will be permitted in update()
  def profile_edit
    @user = User.find(current_user.id)
  end

  # Update and permit the current user
  def update
    @user = User.find(current_user.id)
    removeImage = params[:user][:remove_image].to_i
    if params[:user][:image].nil? && !@user.image.nil? && removeImage != 1
      params[:user][:image] = @user.image
    end
    if removeImage == 1
      @user.update_column(:image, nil)
    end
    if @user.update_attributes(:name => params[:user][:name], :email => params[:user][:email], :country => params[:user][:country],:current_province => params[:user][:current_province],:bio => params[:user][:bio], :image => params[:user][:image])
      if Date.valid_date?(params[:user]["date_of_entry(1i)"].to_i,params[:user]["date_of_entry(2i)"].to_i,params[:user]["date_of_entry(3i)"].to_i)
        @user.date_of_entry = Date.new(params[:user]["date_of_entry(1i)"].to_i,params[:user]["date_of_entry(2i)"].to_i,params[:user]["date_of_entry(3i)"].to_i)
        @user.save
        redirect_to profile_path
      else
        flash.now[:warning] = 'Invalid date of entry'
        render 'profile_edit'
      end
    else
      render 'profile_edit'
    end

  end

  # Show the current user's profile info
  def profile_show
    @user = User.find(current_user.id)

    $admin = User.where("admin = ? AND signed_in = ?", true, true).first
    if $admin.nil?
      $admin = User.where("admin = ?", true).first
    end
    $conversation = Conversation.between(current_user.id,$admin.id).first
    if $conversation.nil?
      $conversation = Conversation.create(sender_id: current_user.id, recipient_id: $admin.id)
    end
    gon.open = $conversation.open
  end

  # Show another user's profile page
  def show
    @user = User.find(params[:id])

    $admin = User.where("admin = ? AND signed_in = ?", true, true).first
    if $admin.nil?
      $admin = User.where("admin = ?", true).first
    end
    $conversation = Conversation.between(current_user.id,$admin.id).first
    if $conversation.nil?
      $conversation = Conversation.create(sender_id: current_user.id, recipient_id: $admin.id)
    end
    gon.open = $conversation.open
  end

  # necessary fields for permitting a new user
  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :name, :country, :province, :date_of_entry,)
  end
  
end