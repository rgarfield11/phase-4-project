class BikeridesController < ApplicationController
    before_action :find_bikeride, only: :show

    def index
        bikerides = Bikeride.all
        render json: bikerides
    end

    def show
        render json: @bikeride
    end

    def create
        bikeride = Bikeride.create!(bikeride_params)
        render json: bikeride, status: :created
    end


    private

    def bikeride_params
        params.permit(:bike_id, :start, :end)
    end

    def find_bikeride
        @bikeride = Bikeride.find(params[:id])
    end
end
