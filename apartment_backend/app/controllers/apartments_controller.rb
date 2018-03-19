class ApartmentsController < ApplicationController

def index
    apt = Apartment.all
    render json:apt
end

def create
    apt = Apartment.create(
        id: params[:id],
        address1: params[:address1],
        address2: params[:address2],
        city: params[:city],
        zip_code: params[:zip_code],
        state: params[:state],
        country: params[:country],
        name: params[:name],
        phone: params[:phone],
        availability_hours: params[:availability_hours])
    apt.save
end

end
