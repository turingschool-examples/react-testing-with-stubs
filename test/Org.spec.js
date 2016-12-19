import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'

import Org from '../lib/components/Org'
import RepoCard from '../lib/components/RepoCard'

import orgData from './helpers/orgData'

describe('<Org />', () => {
  it('should render the org name', () => {
    const wrapper = shallow(<Org />)
    expect(wrapper.contains('turingschool')).to.be.true
  })

  context('testing ajax calls - the easy way', () => {
    it('should display repoCard components for organizational data', () => {
    }) 
  })

  context('testing ajax calls - the hard way', () => {
    //@TODO: Define an empty variable for your server that can be shared with all the tests in this context
    
    before(() => {
      //@TODO: Define your fake org data (or you could bring it in from somewhere else, eh?)
      //@TODO: Use sinon to create a fake server
      //@TODO: Create a response array including:
        // the http status code http://www.restapitutorial.com/httpstatuscodes.html
        // an object that represents the content type (what content type is Github's api giving you)
        // your fake org data, converted to the afor mentioned content type
      //@TODO: Tell the server you created with sinon respond to certain info with a certain response
        // arg 1: the type of request it should response to
        // arg 2: the address the request should be trying to hit for it to respond
        // arg 3: the package of response data it should respond with 
    })

    after(() => {
      //@TODO: cleanup the server between tests
    });

    it('should successfully make an ajax call when component mounts', () => {
      //@TODO: using enzyme, make sure you create and prepare your component
      //@TODO: tell your fake server to respond
      //@TODO: write an expectation that tests if your data renders correctly
        //@TODO: consider if your expectation is helpful to you AND matches the test definition on line 42
          // feel free to change the test definition or write another test
    })
  })
})