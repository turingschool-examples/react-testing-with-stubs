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
    it('should repoCard components for organizational data', () => {
      const wrapper = mount(<Org orgData={orgData} />)
      expect(wrapper.find(RepoCard).length).to.equal(2)
    }) 
  })

  context('testing ajax calls - the hard way', () => {
    let server;
    
    before(() => {
      server = sinon.fakeServer.create()
      var response = [200, {'Content-type': 'application/json'}, JSON.stringify(orgData)];
      server.respondWith('GET', 'https://api.github.com/orgs/turingschool/repos', response)
    })

    after(() => {
      server.restore();
    });

    it('should successfully make an ajax call when component mounts', () => {
      const wrapper = mount(<Org />)
      server.respond()
      expect(wrapper.find(RepoCard).length).to.equal(2)
    })
  })
})