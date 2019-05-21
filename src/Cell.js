
import React, { Component } from 'react';


class Cell extends Component {

    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }


    constructor(props) {
        super(props)
        this.state = {
            color: props.value
        }
      }
    render() {

        return (
            <div 
            className="cell" 
            style={{backgroundColor: this.state.color}}
            onClick={this.handleClick}
            >
       
            </div>
        );
    }
}

export default Cell;


