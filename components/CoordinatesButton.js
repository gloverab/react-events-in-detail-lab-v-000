import React from 'react'

export default class CoordinatesButton extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onReceiveCoordinates([event.clientX,event.clientY])
  }

  render() {
    return (
      <button onClick={this.handleClick}>go</button>
    )
  }
}
