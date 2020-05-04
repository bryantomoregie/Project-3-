class User < ApplicationRecord
    has_many :categories
    has_many :user_lists
    has_many :lists, through: :user_lists
    has_many :swim_lanes, through: :lists
    has_many :tasks, through: :swim_lanes
end 