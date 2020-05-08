class UserListsController < ApplicationController
    def index
        user_lists = UserList.all
        render(json: user_lists)
    end

    def create
        user_list = UserList.create({user_id: params[:user_id], list_id: params[:list_id]})
        render(json: user_list)
    end
end