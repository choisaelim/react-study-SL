import React from 'react';
import Child from './view/Child';
import './Home.css';

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
                
            </div>
        </>
        
    );
};

export default Home;
