class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by_session_token(session[:session_token])
    end

    def login!(user)
        session[:session_token] = user.session_token
    end

    def logout!
        @current_user = nil
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

    def require_login
        redirect_to new_session_url unless logged_in?
    end

    def require_logout
        redirect_to user_url(current_user) if logged_in?
    end
end
