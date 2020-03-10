class UpvotesController < ApplicationController
  include Thredded
  def create
    @upvote = Upvote.new(secure_params)
    @post = Thredded::Post.find(params[:upvote][:post_id])
    respond_to do |format|
      if @upvote.save
        @downvote = Downvote.find_by(user_id: params[:upvote][:user_id], post_id: params[:upvote][:post_id])
        if !@downvote.nil?
          @downvote.destroy
          format.js {render :action => "create_upvote_destroy_downvote"}
          format.html { redirect_to :back }
        else
          format.js {render :action => "create"}
          format.html { redirect_to :back }
        end
      else
        @upvote = Upvote.find_by(user_id: params[:upvote][:user_id], post_id: params[:upvote][:post_id])
        if @upvote.destroy
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
    params.require(:upvote).permit(:user_id,:post_id)
  end
end
