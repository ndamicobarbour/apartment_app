import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { mount } from 'enzyme'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays a View Apartments option', () => {
    const app = mount(<App />)
    expect(app.find('.pagenav_view').text()).toEqual('View Apartments')
})

it('links to apartment index', () => {
    const app = mount(<App />)
    app.find('a#view_apt').simulate('click', {button:0})
    expect(app.find('.pagenav_view').text()).toEqual('View Apartments')
})

it('links to add apartment', ()=> {
    const app = mount(<App />)
    // app.find('a#view_apt').simulate('click', {button:0})
    app.find('a#new_apt').simulate('click', {button:0})
    expect(app.find(".pagenav_add").text()).toEqual('Add an Apartment')
})
