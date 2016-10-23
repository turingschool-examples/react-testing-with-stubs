import React, { Component } from 'react'

export default class RepoCard extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <a href={this.props.html_url}>{this.props.name}</a>
      </div>
    )
  }
}