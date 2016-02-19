import React from 'react'
import Item from './item'

let list = {}
let id = -1

exports.List = React.createClass({
  displayName: 'List',

  getInitialState: function(){
  	return{list: list}
  },

  // handleAdd: function(e){
  //   if(e.target.value === '') return
  //   list[++id] = e.target.value
  //   this.setState({list: list})
  //   e.target.value = ''
  // },

  // handleDelete: function(id){
  //   delete list[id]
  //   this.setState({list: list})
  // },

  render: function() {

  	// var _list = []
  	// for(var key in list){
  	// 	var obj = list[key]
  	// 	_list.push(<Item key={key} ctn={obj} handleDelete={this.handleDelete}></Item>)
  	// }
    return (
    	// <div>
     //  <input placeholder="what's up" onBlur={this.handleAdd}/>
     //  // {_list}
     //  </div>
     <h1></h1>
    	)
  }
});

exports.Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});
