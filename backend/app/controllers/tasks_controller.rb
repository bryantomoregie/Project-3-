class TasksController < ApplicationController
    def index 
        tasks = Task.all
        render(json: tasks)
    end 

    def show
        task = Task.find(params[:id])
        render(json: task)
    end

    def create 
        task = Task.create({name: params[:name], swim_lane_id: params[:swim_lane_id] })
        render(json: task)
    end

    def update
        task = Task.find(params[:id])
        task.update({name: params[:name], swim_lane_id: params[:swim_lane_id]})
        render(json: task)
    end

    def destroy
        task = Task.find(params[:id])
        task.destroy
    end 
end 