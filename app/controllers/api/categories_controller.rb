class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all.includes(:feeds)
    render :index
  end
end
