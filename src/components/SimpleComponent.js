import React, { Component } from 'react'

// Code SimpleComponent Here
class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    this.setState(
      this.state.mood === 'happy' ? { mood: 'sad' } : { mood: 'happy' }
    )
  }
  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}

export default SimpleComponent
