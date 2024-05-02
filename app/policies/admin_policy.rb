class AdminPolicy
  attr_reader :user

  # `_record` in this example will be :dashboard
  def initialize(user, _record)
    raise Pundit::NotAuthorizedError, "must be logged in" unless user

    @user = user
  end

  def show?
    user.admin?
  end
end
