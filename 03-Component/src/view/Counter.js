import React, { Component } from 'react';

//rcc
class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0
    };

    buttonClick(props){
        // var num = type === 'plus' ? 1 : -1;
        this.setState((prevState, props) => ({
            // number: prevState.number + 1
        }));
    }

    render() {
        const {number, fixedNumber} = this.state;
        return (
            <div>
                <h3>{number}</h3> 
                <h3>{fixedNumber}</h3>
                <button onClick={this.buttonClick}>+1</button>
                <button>-1</button>
            </div>
        );
    }
}

export default Counter;