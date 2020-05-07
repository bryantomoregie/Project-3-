class SessionsController < ApplicationController

    # skip_before_action(:check_login, only: [ :login, :handle_login, :new ])


def handle_login
     user = User.find_by({username: params[:username]})
     if (user != nil && user.authenticate(params[:password])) 
        session[:user_id] = user.id
        render(json: user)
        # render(json: user)
        # render(file: "#{Rails.root}/frontend/user_cat.html")
        # userjs = "frontend/src/user_cat.js"
        # render(js: userjs)
     else
        # render(js: "alert('Hello Rails');")
        # byebug
        # flash[:login_error] = "Username Does Not Exit. Please Sign Up")
     end
end

def destroy
    byebug
    session[:user_id] = nil
    byebug
end

end