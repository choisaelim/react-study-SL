import React from 'react';
import Child from './view/Child';
import './Home.css';
import Person from './view/Person';
import Counter from './view/Counter';

//rsc
const Home = () => {
    return (
        <>
            {/* send props to Parent */}
            <div className = 'box'>
                <Child>첫 번째 Child 컴포넌트</Child>
                <Child>두 번째 Child 컴포넌트</Child>
                <Child>부모 컴포넌트에서 자식 컴포넌트로 props 전달</Child>
            </div>
            <div className = 'box'>
                <Person name = '영희' favoriteNumber = '3' favoriteColor = 'indigo'/>
                <Person name = '철수' favoriteNumber = '4' favoriteColor = 'blueviolet'/>
                <Person name = '수영' favoriteNumber = '7' favoriteColor = 'orange'/>
            </div>
            <div className = 'box'>
                <Counter/>
            </div>
        </>
        
    );
};

export default Home;
