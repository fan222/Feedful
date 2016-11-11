class Api::CollectionsController < ApplicationController
  def index
    if current_user
      @collections = current_user.collections.includes(:feeds)
    end
  end

  def create
    if current_user
    @collection = Collection.new(
      name: params[:collection][:name],
      user_id: current_user.id
    )
      if @collection.save
        render :show
      else
        render(
          json: @collection.errors.full_messages,
          status: 422
          )
      end
    else
      render(
        json: ["please login/signup"],
        status: 404
      )
    end
  end

  def update
    if current_user
      @collection = Collection.find(params[:id])
      feed_to_add = params[:collection][:feedAdd]
      feed_to_remove = params[:collection][:feedRemove]

      if !(feed_to_add == "none")
        @collection.collection_feeds.create(feed_id: feed_to_add)
        render :show
      elsif !(feed_to_remove == "none")
        @collection.collection_feeds.where(feed_id: feed_to_remove).destroy_all
        render :show
      elsif @collection.update!(name: params[:collection][:name])
        render :show
      else
        @errors = ["fail to update collection"]
        render( json: ["please login/signup"],
                status: 422
                )
      end
    else
      render(
        json: ["please login/signup"],
        status: 404
      )
    end
  end

  def destroy
    debugger
    if current_user
      @collection = Collection.find_by(id: params[:id])
      if @collection
        @collection.destroy
        render :show
      else
        render(
          json: ["fail to delete collection"],
          status: 404
        )
      end
    else
      render(
        json: ["please login/signup"],
        status: 404
      )
    end
  end

  def show

  end
end
