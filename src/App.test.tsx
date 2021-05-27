import React from 'react';
import {shallow} from 'enzyme'
import App from './App';


describe('App', ()=>{

const {location} = window
  beforeAll(()=>{
    delete window.location;

    window.location = {
      href: ''
    }
  })

  afterAll(()=>{
    window.location = location
  })
  it('it render without crash and ensure textinput exist', () => {
    const containerWrapper = shallow(<App />)
    const textInput = containerWrapper.find('input');
    expect(textInput).toHaveLength(1)
    expect(textInput.props().placeholder).toEqual('search')

    const button = containerWrapper.find('button')
    expect(button).toHaveLength(1)
    expect(button.render().text()).toEqual('Go')
    
    button.simulate('click')
    expect(window.location.href).toEqual('https://google.com')
    
  })

  
})