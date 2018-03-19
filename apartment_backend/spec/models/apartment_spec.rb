require 'rails_helper'

RSpec.describe Apartment, type: :model do

  it "can create an Apartment" do
    apartment = Apartment.new
    expect(apartment).to exist
  end

end
