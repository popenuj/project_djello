class ListsController < ApplicationController

  def index
    @board = Board.find(params[:board_id])
    @lists = @board.lists
    respond_to do |format|
      format.json { render json: @lists }
    end
  end

end
