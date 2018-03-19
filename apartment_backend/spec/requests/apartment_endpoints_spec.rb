require 'rails_helper'

RSpec.describe "Apartment Endpoints", type: :request do
    describe "GET & POST /apartments" do

        it "gets apartments" do
            Apartment.create
            get '/apartments'
            expect(response).to have_http_status(200)
        end

        it "returns json" do
            Apartment.create
            get '/apartments'
            json = JSON.parse(response.body)
            expect(json.length).to eq 1
        end

        it "adds an apartments upon post" do
            post '/apartments?id:1'
            get '/apartments'
            json = JSON.parse(response.body)
            expect(json.length).to eq 1
        end

    end
end
