# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

apartment_attributes = [
    {
        address1: '123 John Way',
        address2: 'Apt 2',
        city: 'Laguna',
        zip_code: '92012',
        state: 'CA',
        country: 'USA',
        name: 'Oussa',
        phone: '920-542-1123',
        availability_hours: 'Only past midnight ;-)'
    },
    {
        address1: '456 John Way',
        address2: 'Apt 9',
        city: 'Laguna',
        zip_code: '92012',
        state: 'CA',
        country: 'USA',
        name: 'Youssa',
        phone: '923-822-8421',
        availability_hours: 'Definitely in daylight, business hours, super professional.'
    },
    {
        address1: '789 John Way',
        address2: 'Apt 2^7th',
        city: 'Gotham',
        zip_code: '666',
        state: 'NO',
        country: 'USA',
        name: "Ohuhsaahh",
        phone: '1-800-PUTS-APT',
        availability_hours: 'You can call me any time, as long as you don\'t mind the sound of a thousand screaming souls'
    },
]

apartment_attributes.each do |attributes|
    Apartment.create(attributes)
end
