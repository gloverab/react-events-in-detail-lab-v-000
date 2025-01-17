import React from 'react'

export default class CoordinatesButton extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>go</button>
    )
  }
}
