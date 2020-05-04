class List < ApplicationRecord 
    has_many :swim_lanes 
    has_many :task, through: :swim_lanes 
    belongs_to :category 
end 