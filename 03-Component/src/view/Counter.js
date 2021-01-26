import React, { Component } from 'react';

//rcc
class Counter extends Component {
    state = {
        number : 0,
        fixedNumber: 0
    };
    
    render() {
        const {number, fixedNumber} = this.state;
        const numberChange = (type) => {
            var num = type === 'plus' ? 1 : -1;
            this.setState((prevState, props) => ({
                number: prevState.number + num
            }),
            () => {
                console.log('setState called');                
            }
            );
        }
        return (
            <div>
                <h3>{number}</h3> 
                <h3>{fixedNumber}</h3>
                <button onClick = {() => numberChange('plus')}>+ 1</button>
                <button onClick = {() => numberChange('minus')}>-1</button>
            </div>
        );
    }
}

export default Counter;