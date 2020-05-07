class SwimLanesController < ApplicationController

    def index  
        # list = List.find(params[:id])
        # swimlanes = list.swim_lanes
        swimlanes = SwimLane.all
        render(json:swimlanes)
    end 

    def new 
        swimlane = SwimLane.new
        render(json:swimlane)
    end

    def create
        # list = List.all[0]
        swimlane = SwimLane.create({
            name: params[:name],
            list_id: params[:list_id]
            # list_id: list.id
        })
        render(json:swimlane)
    end 

    def update 
        list = List.all[0]
        swimlane = SwimLane.find(params[:id])
        swimlane.update({
            name: params[:name],
            list_id: list.id
        })
        render(json:swimlane)
    end 

    def destroy
        swimlane = SwimLane.find(params[:id])
        swimlane.destroy 
    end 

end 