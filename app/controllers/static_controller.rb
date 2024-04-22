class StaticController < ApplicationController
    def home
      render inertia: 'Homepage'
    end

    def resume
      render inertia: 'Resume'
    end

    def contact
      render inertia: 'Contact'
    end
  end