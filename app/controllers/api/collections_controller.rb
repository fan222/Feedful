class Api::CollectionsController < ApplicationController
  def index
    if current_user
      @collections = current_user.collections.includes(:feeds)
    end
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
