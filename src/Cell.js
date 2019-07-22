import React, { Component } from 'react';

export default class Cell extends Component {
  state = {
    color: this.props.value
}
  render() {
    
    return (
      <div 
      style={{backgroundColor: this.state.color}} 
      className='cell'
      // onClick={() => {this.state.value ='#fff'}}
      onClick={() => {this.setState({color: '#333'})}}
      //
      // this.setState({page: newPage})
      >test
      </div>
    )
  }
}
