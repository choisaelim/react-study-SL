import './App.css';
import React, {Fragment} from 'react';

function App() {
  //return의 양 끝이 부모 요소(div)로 감싸져야 한다.

  //변수를 정의하여 출력 가능
  const name = 'React';
  return (
    <div>
      <h1 className='name'>H1 tag test</h1>
      <h2>{name}</h2>
      { //조건문으로 삼항연산자 사용 가능
      name === 'React' ? (<h2> It's React </h2>) : (<h2> It's wrong </h2>)} 
    </div>
  );
}

export default App;
