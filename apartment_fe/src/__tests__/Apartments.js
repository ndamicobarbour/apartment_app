import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme'

const apartment_attributes = [
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

it ("loads Apartments component in view", () => {
    const app = mount(<App />)
    app.find('a#view_apt').simulate('click', {button:0})
    expect(app.find('h2').text()).toEqual('All the Apartments')
})

it ("renders adress1 from props", ()=> {
    const component = mount(<Apartments apartments={apartment_attributes} />)
    const add1 = component.find('h4 > .apt-1').first()
    expect(apt1.text()).toBe("123 John Way")
})

it ('renders availability_hours from props', () =>{
    const component = mount(<Apartments apartments={apartment_attributes} />)
    const availability_hours = component.find('h4 > .hours').first()
    expect(availability_hours.text()).toBe("Only past midnight ;-)")
})
