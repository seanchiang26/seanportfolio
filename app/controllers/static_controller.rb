class StaticController < ApplicationController
    def home
      projects = Project.all

      render inertia: 'Homepage', props: {
      projects: projects.as_json(
        only: [:slug, :title, :one_liner, :image_url]
      )
    }
    end
  end
