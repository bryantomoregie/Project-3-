class CreateUserLists < ActiveRecord::Migration[6.0]
  def change
    create_table :user_lists do |t|
      t.integer :user_id
      t.integer :list_id

    end
  end
end
