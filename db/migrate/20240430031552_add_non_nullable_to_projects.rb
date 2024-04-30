class AddNonNullableToProjects < ActiveRecord::Migration[7.1]
  def change
    change_column_null :projects, :title, false
    change_column_null :projects, :body, false
  end
end
