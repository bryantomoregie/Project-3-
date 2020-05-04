class CreateSwimLanes < ActiveRecord::Migration[6.0]
  def change
    create_table :swim_lanes do |t|
      t.string :name
      t.integer :list_id
    end
  end
end
