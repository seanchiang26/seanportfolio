class StaticController < ApplicationController
    def home
      render inertia: 'Homepage'
    end
  end