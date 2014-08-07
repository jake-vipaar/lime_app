class HomeController < ApplicationController
  def index
    @business_sizes = [ "1 - 200", "201 - 500", "501 - 1000", "> 1000" ]
  end
end
