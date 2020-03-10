module ResetPasswordsHelper
  require 'sendgrid-ruby'
  include SendGrid

  def reset_password_email(user)
    @user = user
    @url  = edit_reset_password_url(@user.reset_password_token)

    from = Email.new(email: 'janet.audu@navigatingcanada.com')
    to = Email.new(email: user.email)
    subject = "Your password has been reset"
    content = Content.new(type: 'text/html', value: '<p>Hello, ' + @user.name + '</p>
                <p>Someone (hopefully, you) have requested to reset your password.</p>
                <p>To choose a new password, follow this link: ' + @url + '</p>')
    mail = Mail.new(from, subject, to, content)

    sg = SendGrid::API.new(api_key: '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')
    response = sg.client.mail._('send').post(request_body: mail.to_json)
    puts response.status_code
    puts response.body
    puts response.headers
  end
end