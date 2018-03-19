require 'rails_helper'

RSpec.describe "CoolFeatures", type: :request do
  describe "GET /cool_features" do
    it "works! (now write some real specs)" do
      get cool_features_path
      expect(response).to have_http_status(200)
    end
  end
end
