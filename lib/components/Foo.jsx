import React, { Component } from 'react'

export default (props) => {
  return (
    <div>
      <button onClick={props.onButtonClick}>Button</button>
    </div>
  )
}