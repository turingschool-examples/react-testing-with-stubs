import React, { Component } from 'react'
const $ = require('jquery');

import RepoCard from './RepoCard'

export default class Org extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'turingschool',
      source: 'https://api.github.com/orgs/turingschool/repos',
      data: []
    }
  }

  componentDidMount() {

  }

  getOrgData(){

  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}