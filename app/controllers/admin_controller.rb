class AdminController < ApplicationController
  after_action :verify_authorized

  def dashboard
    @projects = Project.all

    authorize :admin, :show?
    render inertia: 'Dashboard', props: {
      projects: @projects
    }
  end
end
