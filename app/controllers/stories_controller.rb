
class StoriesController < ApplicationController
  before_action :find_story, only: [:edit, :update, :show, :delete]

  # Index action to render all stories
  def index
    @stories = Story.all
    if $admin.nil?
      $admin = User.where("admin = ?", true).first
    end
    if not $admin.nil?
      $conversation = Conversation.between(current_user.id,$admin.id).first
    end
    if $conversation.nil? and not $admin.nil?
      $conversation = Conversation.create(sender_id: current_user.id, recipient_id: $admin.id)
    end
    if not $conversation.nil?
      gon.open = $conversation.open
    end
  end

  # New action for creating story
  def new
    @story = Story.new
  end

  # Create action saves the story into database
  def create
    @story = Story.new(story_params)
    if @story.save
      flash[:notice] = "Successfully created story!"
      redirect_to story_path(@story)
    else
      flash[:alert] = "Error creating new story!"
      render :new
    end
  end

  # Edit action retrives the story and renders the edit page
  def edit
  end

  # Update action updates the story with the new information
  def update
    if @story.update_attributes(:title => params[:story][:title], :body => params[:story][:body],:image => params[:story][:image])
      flash[:notice] = "Successfully updated story!"
      redirect_to story_path(@story)
    else
      flash[:alert] = "Error updating story!"
      render :edit
    end
  end

  # The show action renders the individual story after retrieving the the id
  def show
    @number = @story.id-1
  end

  # The destroy action removes the story permanently from the database
  def destroy
    if @story.destroy
      flash[:notice] = "Successfully deleted story!"
      redirect_to stories_path
    else
      flash[:alert] = "Error updating story!"
    end
  end

  private

  def story_params
    params.require(:story).permit(:title, :body, :image)
  end

  def find_story
    @story = Story.find(params[:id])
  end
end