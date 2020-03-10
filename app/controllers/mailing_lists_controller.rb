class MailingListsController < ApplicationController
  def new
  end

  # Create a mailing list user and permit to database
  def create
    @mailing_list = MailingList.new(params.require(:user).permit(:name, :country, :email, :message))
    @mailing_list.save
  end
end

