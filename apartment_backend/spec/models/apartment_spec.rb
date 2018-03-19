require 'rails_helper'

RSpec.describe Apartment, type: :model do

  it "can create an Apartment" do
    expect{Apartment.create}.not_to raise_error
  end

end
