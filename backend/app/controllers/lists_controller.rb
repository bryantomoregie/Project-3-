class ListsController < ApplicationController

    def index 
        # category = category_id.find(params[:id])
        # list = category.lists 
        lists = List.all
        render(json: lists)
    end 

    def new 
        list = List.new
        render(json:list)
    end

    def create
        user = User.all[0]
        list = List.create({
            name: params[:name],
            # category_id: params[:category_id]
            category_id: user.id
        })
        render(json:list)
    end 

    def update 
        list = List.find(params[:id])
        category = Category.all[0]
        list.update({
            name: params[:name],
            category_id: category.id
        })
        render(json:list)
    end 

    def destroy
        list = List.find(params[:id])
        list.destroy
    end 




end 

