import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'

import Org from '../lib/components/Org'
import RepoCard from '../lib/components/RepoCard'

import orgData from './helpers/orgData'

describe('<Org />', () => {
  it('should render the org name', () => {

  })

  context('testing ajax calls - the easy way', () => {
    it('should repoCard components for organizational data', () => {

    }) 
  })

  context('testing ajax calls - the hard way', () => {
    let server;
    
    before(() => {

    })

    after(() => {
      server.restore();
    });

    it('should successfully make an ajax call when component mounts', () => {

    })
  })
})