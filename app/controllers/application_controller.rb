class ApplicationController < ActionController::Base
  include Pundit::Authorization
  include InertiaCsrf
  include InertiaFlash

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  inertia_share auth: -> {
    if user_signed_in?
      {
        email: current_user.email,
        role: current_user.role,
      }
    end
  }

  private

  def user_not_authorized
    redirect_to request.referrer || root_path, alert: "You are not authorized to perform this action."
  end
end
