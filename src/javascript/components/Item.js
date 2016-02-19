import React from 'react'

exports.Item = React.createClass({
  displayName: 'Item',

  render: function() {
    return (<div className="todo-item" onClick={this.props.handleDelete(this.props.id)}>
        <span>{this.props.ctn}</span>
        <button className="btn">X</button>
    </div>)
  }
});

