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
    if (this.props.orgData) { return this.setState({data: this.props.orgData}) }
    this.getOrgData()
  }

  getOrgData(){
    this.serverRequest = $.get(this.state.source, function(result){
      this.setState({data: result})
    }.bind(this))
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        Repos owned by {this.state.name}
        {this.state.data
          .map((repo, index) => (
            <RepoCard key={index} {...repo} />
          ))
        }
      </div>
    )
  }
}