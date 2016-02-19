import React from 'react'
import Item from './item'

let list = {}

exports.List = React.createClass({
  displayName: 'List',
  getInitialState: function(){
  	return{list: list}
  },

  render: function() {

  	var _list = []
  	for(var key in list){
  		var obj = list[key]
  		_list.push(<Item key={key} value={obj}></Item>)
  	}
    return (
    	<div>{_list}</div>
    	)
  }
});

