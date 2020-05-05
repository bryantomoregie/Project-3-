class CategoriesController < ApplicationController

    def index
        # user = User.find(params[:id])
        # categories = user.categories
        categories = Category.all
        render(json: categories)
    end

    def create
        # user = User.all[0]
        category = Category.create({
            name: params[:name],
            user_id: params[:user_id]
            # user_id: user.id
        })
        render(json: category)
    end

    def show
        category = Category.find(params[:id])
        render(json: category, include: [:lists])
    end

    def update
        category = Category.find(params[:id])
        user = category.user_id
        category.update({
            name: params[:name],
            # user_id: params[:user_id]
            user_id: user
        })
        render(json: category)
    end

    def destroy
        category = Category.find(params[:id])
        category.destroy
    end

end