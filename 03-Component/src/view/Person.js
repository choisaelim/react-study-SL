import React from 'react';

const Person = ({name, favoriteNumber, favoriteColor}) => {
    return (
        <div className = 'padding'>
            <div>이름 : {name}</div>
            <div>좋아하는 숫자 : {favoriteNumber}</div>
            <div className={favoriteColor}>좋아하는 색상 : {favoriteColor}</div>
        </div>
    );
};

export default Person;