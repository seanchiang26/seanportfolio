class AdminController < ApplicationController
  after_action :verify_authorized

  def dashboard
    authorize :admin, :show?
    render inertia: 'Dashboard'
  end
end
