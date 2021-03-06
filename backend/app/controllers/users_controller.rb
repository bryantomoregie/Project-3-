class UsersController < ApplicationController
    def index
        users = User.all
        render(json: users)
    end

    def create
        user = User.create({
            name: params[:name],
            username: params[:username],
            password: params[:password],
            email: params[:email]
        })
        render(json: user)
    end

    def show
        # user = User.find_by(id: session[:user_id])
        # session[:user_id]
        # categories = user.categories
        # render(json: user, include: [:categories])
        user = User.find(params[:id])
        categories = user.categories
        render(json: user, include: [:categories])
    end

    def update
        user = User.find(params[:id])
        user.update({
            name: params[:name],
            username: params[:username],
            password: params[:password],
            email: params[:email]
        })
        render(json: user)
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end

end