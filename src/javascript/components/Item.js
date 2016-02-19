import React from 'react'

exports.Item = React.createClass({
  displayName: 'Item',

  render: function() {

    return (<div id={this.props.key} onClick={this.handleCick}>
        <span>{this.props.ctn}</span>
        <button className="btn">X</button>
    </div>)
  }
});

