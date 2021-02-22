import React, { useCallback, useRef, useState } from 'react'
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import TodoTemplate from './components/TodoTemplate'

function createBulkTodos() {
    const array = new Array();
    for(let i = 1 ; i <= 2500 ; i++){
        array.push(
            {
                id: i,
                text: `할 일 ${i}`,
                checked: false
            }
        )
    }

    return array;
    
}
const App = () => {
    const [todos, setTodos] = useState(createBulkTodos);
    // useState([
    //     {
    //         id: 1,
    //         text: 'React 기초 알아보기',
    //         checked: true
    //     },{
    //         id: 2,
    //         text: '컴포넌트 스타일링',
    //         checked: true
    //     },{
    //         id: 3,
    //         text: '일정 관리 앱 만들어보기',
    //         checked: false
    //     }
    // ]);

    const nextId = useRef(4); //렌더링되지 않기 때문에 useRef사용

    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId,
                text: text,
                checked: false
            };

            setTodos(todos.concat(todo));
            nextId.current += 1;
        },
        [todos], //todos 바뀔 때만 렌더링
    )

    const onRemove = useCallback(
        id => {
            setTodos(todos.filter(todo => todo.id !== id));
        },
        [todos],
    )

    const onToggle = useCallback(
        id => {
            setTodos(todos.map(
                //(...todo, checked) todo 안에 checked를 : 오른쪽(!todo.checked)으로 대체
                todo => todo.id === id ? {...todo, checked : !todo.checked } : todo
            ));
        },
        [todos],
    )

    return (
        <TodoTemplate>
            <TodoInsert onInsert = {onInsert}/>
            <TodoList todos = {todos} onRemove = {onRemove} onToggle = {onToggle}/>
        </TodoTemplate>
    )
}

export default App
