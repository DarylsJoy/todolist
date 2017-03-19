import React from 'react';
import './clrbtn.css'

var ClrBtn = React.createClass({
  handleClr() {
    this.props.onClr([]);
  },
  render() {
    return (
      <div id="clrBtn">
        <button type="button" onClick={this.handleClr}>clear</button>
      </div>
    );
  }
})

export default ClrBtn;
