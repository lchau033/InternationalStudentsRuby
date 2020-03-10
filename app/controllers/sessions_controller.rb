class SessionsController < ApplicationController
  def log_out
		logout
		flash[:success] = 'See you!'
		redirect_to root_path
	end

 def log_in
	 @user = User.new()
	 if not current_user.nil?
		if current_user.admin?
			redirect_back_or_to admin_users_path
		else
			redirect_back_or_to forum_path
		end
	 end
 end

	def create
		if login(params[:email], params[:password])
			flash[:success] = 'Welcome back'
			if current_user.admin?
				redirect_back_or_to admin_users_path
			else
				redirect_back_or_to forum_path
			end
		else

			flash.now[:error] = 'E-mail and/or password is incorrect.'
			flash.keep(:error)

			redirect_back_or_to log_in_path
		end
	end

	def destroy
		logout
		flash[:success] = 'See you!'
		redirect_to root_path
	end
end