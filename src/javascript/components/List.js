import React from 'react'
import {Item} from './item'

let list = {}
let id = -1

exports.List = React.createClass({
  displayName: 'List',

  getInitialState: function(){
  	return{list: list}
  },

  add: function(value){
    list[++id] = value
    this.setState({list: list})
  },

  delete: function(id){
    delete list[id]
    this.setState({list: list})
  },

  update: function(id, value){
    list[id] = value
    this.setState({list: list})
  },

  handleBlur: function(e){
    if(e.target.value === '') return
    this.add(e.target.value)
    e.target.value = ''
  },

  handleKeyUp: function(e){
    if(e.which !== 13) return
    this.add(e.target.value)
    e.target.value = ''
  },

  // handleClick: function(id){
  //   return function(e){
  //     if(e.target.tagName === 'BUTTON') this.delete(id)
  //     //if(e.target.tagName === 'SPAN') this.update(id, e.target.)
  //   }
  // },
  handleDelete: function(id){
    return function(e){
      if(e.target.tagName !== 'BUTTON') return
        console.log(id)
      this.delete(id)
    }.bind(this)
  },

  render: function() {

  	var _list = []
  	for(var key in this.state.list){
  		var obj = this.state.list[key]
  		_list.push(<Item key={key} id={key} ctn={obj} handleDelete={this.handleDelete}/>)
  	}
    return (<div>
      <input placeholder="what's up" onBlur={this.handleBlur} onKeyUp={this.handleKeyUp}/>
      {_list}
    </div>)
  }
});
