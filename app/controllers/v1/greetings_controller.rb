module V1
  class GreetingsController < ApplicationController
    def index
      @greetings = Greeting.all
      render json: @greetings
    end
  end
end
