import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme'

it ("loads Apartments component in view", () => {
    const app = mount(<App />)
    app.find('a#view_apt').simulate('click', {button:0})
    expect(app.find('h2').text()).toEqual('All the Apartments')
})
