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
  project.body = "Ping Communications was a tool built to handle live issue management in a style similar to JIRA but on a timescale of minutes. Over the two years that this product had been in use, we brought issue resolution time down from a 20 minute average to approximately 5 minutes, improving employee and management satisfaction overall. At the time, we estimated that this increased revenue by about $100k per football season.\n\nOriginally, Ping was a Slack extension used internally by Boston College's computer support team for use during football games, but after proving its value, it was rebuilt in Flutter. Through this rebuild, we implemented features such as a built in map, staff status, asset tracking, maintenance requests, and more.\n\nThis was my first foray into full stack engineering and through this project I learned a lot about how backends work, building good user experiences, and how to communicate about product with customers."
  project.image_url = "/images/ping_ss.png"
  project.tag_list = ["Flutter", "Firebase"]
end

# Project: Die-Hard
Project.where(title: "Die-Hard").first_or_create do |project|
  project.title = "Die-Hard"
  project.one_liner = "Turn your one-time listeners into diehard fans"
  project.url = "https://www.die-hard.io/"
  project.body = "Die-Hard is a loyalty marketing platform designed to help independent artists grow and stay connected with their diehard fan base. We worked with 10 artists, including Grammy award winning singer Cocoa Sarai, to build their fan communities by offering rewards in exchange for first party emotional data about their fans. For one of our artists, this data successfully led to them being able to sell out of merch at one of their shows.\n\nOver the past year, we built customizable artist profile pages, a reward distribution system, polling systems, and an event check in system.\n\nThis was my first time learning and using React, Next.js, and Supabase and I would say that I definitely learned quite a bit about web development. I had previously dabbled a bit into it with Ping Communications as we were building an admin dashboard with Flutter Web, but building with Next.js was a bit of a different challenge. I learned how full-stack frameworks function and interact with each other, how PostgreSQL and SQL in general works, as well as how to develop in a team of developers rather than just on my own."
  project.image_url = "/images/diehard_ss.png"
  project.tag_list = ["Next.js", "React", "Typescript", "Supabase"]
end

# Project: Brickhouse
Project.where(title: "Brickhouse").first_or_create do |project|
  project.title = "Brickhouse"
  project.one_liner = "Discover the most unique live music spots in your city. Personalized for you."
  project.url = "https://brickhouse.club/"
  project.body = "Brickhouse Club is an event discovery platform designed to the \"For You Page\" for live music events. We had identified a key problem where small independent artists struggle to draw crowds to their shows, but people are willing to go to shows even if they do not know the performer if the vibes are good or the concept is interesting enough (e.g. Sofar Sounds). As a result, we are cataloging smaller events in the Bay Area and labeling them with descriptive tags and tracking user interests to recommend them events similar to the ones they enjoy going to.\n\nAt the time of writing this description, the MVP of this product had just been launched, as previously it was just a regularly updated Notion spreadsheet with about 100 users. We made the decision to make a dedicated website to improve the mobile viewing experience and begin being able to personalize the experience for our users.\n\nThis project was my first professional use of Ruby on Rails, as I thought that a product like this would need a dedicated server over the serverless implementation of Next.js and Vercel. It was definitely a learning experience in regards to learning the ins and outs of a framework like this but the added flexibility of not using a backend-as-a-service is definitely an upside."
  project.image_url = "/images/brickhouse_ss.png"
  project.tag_list = ["Ruby on Rails", "React", "Typescript"]
end

# Project: Portfolio Website
Project.where(title: "Portfolio Website").first_or_create do |project|
  project.title = "Portfolio Website"
  project.one_liner = "Just my portfolio site, you're on it rn"
  project.url = "https://www.schiang.dev/"
  project.body = "My portfolio website is my first project after learning Ruby on Rails. I decided to pick up this framework and language to learn something more battle tested and more common in industry, as I found Next.js slow and relying too heavily on backends-as-a-service as detrimental to my growth as a software engineer.\n\nThis website is still unfinished, as I intend to implement a slew of features just to play with and learn more in depth how Ruby works as a language. I quite enjoy this framework and I definitely am looking forward to learning more about it as I continue to build out this site."
  project.image_url = "/images/portfolio_ss.png"
  project.tag_list = ["Ruby on Rails", "React"]
end
