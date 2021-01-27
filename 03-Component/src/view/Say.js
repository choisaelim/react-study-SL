import React, { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('black');

    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요');

    const onChangeColor = (color) => setColor(color);

    return (
        <div>
            <button onClick = {onClickEnter}>입장</button>
            <button onClick = {onClickLeave}>퇴장</button>
            <h3 style = {{color}}>{message}</h3>
            <button style = {{color: 'red'}} onClick = {() => onChangeColor('red')} >빨간색</button>
            <button style = {{color: 'green'}} onClick = {() => onChangeColor('green')}>초록색</button>
            <button style = {{color: 'blue'}} onClick = {() => onChangeColor('blue')}>파란색</button>
        </div>
    );
};

export default Say;