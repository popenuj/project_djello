class CardsController < ApplicationController

  def index
    @list = List.find(params[:list_id])
    @cards = @list.cards
    respond_to do |format|
      format.json { render json: @cards }
    end
  end

end
