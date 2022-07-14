class BikesController < ApplicationController
    before_action :find_bike, only: [:show, :update, :destroy]
    skip_before_action :authorize, only: [:index]

    def index
        bikes = Bike.all
        render json: bikes
    end

    def show
        render json: @bike
    end

    def create
        bike = Bike.create!(bike_params)
        render json: bike, status: :created
    end

    def update
        @bike.update!(bike_params)
        render json: @bike
    end

    def destroy
        @bike.destroy

        head :no_content
    end

    private

    def bike_params
        params.permit(:category, :age, :email, :returned, :image_url, :owner_id)
    end

    def find_bike
        @bike = Bike.find(params[:id])
    end
end
