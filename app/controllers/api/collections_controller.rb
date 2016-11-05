class Api::CollectionsController < ApplicationController
  def index
    @collections = Collection.all.includes(:feeds)
    render :index
  end

  def create

  end

  def update

  end

  def delete

  end

  def show

  end
end
