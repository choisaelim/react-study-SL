import React, { useCallback, useReducer, useRef, useState } from 'react'
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

function todoReducer(todos, action){
    switch (action.type) {
        case 'INSERT':
            return todos.concat(action.todo);
        case 'REMOVE':
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE':
            return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked}: todo)
        default:
            return todos;
    }
}
const App = () => {
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
    // const [todos, setTodos] = useState(createBulkTodos);
    const [number, setNumber] = useState(0);

    const onIncrease = useCallback(
        () => setNumber(prevNumber => prevNumber + 1),
        []
    );
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

    const nextId = useRef(2501); //렌더링되지 않기 때문에 useRef사용

    const onInsert = useCallback(
        text => {
            const todo = {
                id: nextId.current,
                text: text,
                checked: false
            };

            // setTodos(todos => todos.concat(todo));
            dispatch({type: 'INSERT', todo});
            nextId.current += 1;
        },
        [], //todos 바뀔 때만 렌더링
    )

    const onRemove = useCallback(
        // id => {
        //     setTodos(todos => todos.filter(todo => todo.id !== id));
        // },
        // [todos],
        id => {
            dispatch({type: 'REMOVE', id});
        }, []
    )

    const onToggle = useCallback(
        id => {
            // setTodos(todos => todos.map(
            //     //(...todo, checked) todo 안에 checked를 : 오른쪽(!todo.checked)으로 대체
            //     todo => todo.id === id ? {...todo, checked : !todo.checked } : todo
            // ));
            dispatch({type: 'TOGGLE', id});
        },
        [],
    )

    return (
        <TodoTemplate>
            <TodoInsert onInsert = {onInsert}/>
            <TodoList todos = {todos} onRemove = {onRemove} onToggle = {onToggle}/>
        </TodoTemplate>
    )
}

export default App
