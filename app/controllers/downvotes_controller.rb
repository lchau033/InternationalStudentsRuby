class DownvotesController < ApplicationController
  include Thredded
  def create
    @downvote = Downvote.new(secure_params)
    @post = Thredded::Post.find(params[:downvote][:post_id])
    respond_to do |format|
      if @downvote.save
        @upvote = Upvote.find_by(user_id: params[:downvote][:user_id], post_id: params[:downvote][:post_id])
        if !@upvote.nil?
          @upvote.destroy
          format.js {render :action => "create_downvote_destroy_upvote"}
          format.html { redirect_to :back }
        else
          format.js {render :action => "create"}
          format.html { redirect_to :back }
        end
      else
        @downvote = Downvote.find_by(user_id: params[:downvote][:user_id], post_id: params[:downvote][:post_id])
        if @downvote.destroy
          format.js {render :action => "destroy"}
          format.html { redirect_to :back }
        else
          format.js {render :action => "error"}
          format.html { redirect_to :back }
        end
      end
    end
  end

  private
  def secure_params
    params.require(:downvote).permit(:user_id,:post_id)
  end
end
