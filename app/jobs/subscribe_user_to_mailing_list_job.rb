class SubscribeUserToMailingListJob < ApplicationJob
  queue_as :default

  def perform(user)
    gibbon = Gibbon::Request.new
    gibbon.lists("1fc27c320e").members.create(body: {email_address: user.email, status: "subscribed", merge_fields:{FNAME: user.name, LNAME: user.name}})
  end
end
