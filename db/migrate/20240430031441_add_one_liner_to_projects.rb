class AddOneLinerToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :one_liner, :string, null: false
  end
end
