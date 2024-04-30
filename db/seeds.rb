# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

if Doorkeeper::Application.count.zero?
  Doorkeeper::Application.create!(name: 'Web Client', redirect_uri: '', scopes: '')
  # Doorkeeper::Application.create!(name: 'iOS Client', redirect_uri: '', scopes: '')
  # Doorkeeper::Application.create!(name: 'Android Client', redirect_uri: '', scopes: '')
  # Doorkeeper::Application.create!(name: 'React', redirect_uri: '', scopes: '')
end

# Project: Ping Communications
Project.where(title: "Ping Communications").first_or_create do |project|
  project.title = "Ping Communications"
  project.one_liner = "Supercharge your event communications"
  project.body = "Descriptive text"
  project.tag_list = ["Flutter", "Firebase"]
end

# Project: Die-Hard
Project.where(title: "Die-Hard").first_or_create do |project|
  project.title = "Die-Hard"
  project.one_liner = "Turn your one-time listeners into diehard fans"
  project.body = "Descriptive text"
  project.tag_list = ["Next.js", "React", "Typescript", "Supabase"]
end

# Project: Brickhouse
Project.where(title: "Brickhouse").first_or_create do |project|
  project.title = "Brickhouse"
  project.one_liner = "Discover the most unique live music spots in your city. Personalized for you."
  project.body = "Descriptive text"
  project.tag_list = ["Ruby on Rails", "React", "Typescript"]
end
