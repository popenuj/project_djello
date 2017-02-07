class UsersController < ApplicationController

  def index
    @board = Board.find(params[:board_id])
    @users = @board.users
    respond_to do |format|
      format.json { render json: @users }
    end
  end

end
