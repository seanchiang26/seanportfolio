class AddImageUrlToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :image_url, :string, null: false
  end
end
