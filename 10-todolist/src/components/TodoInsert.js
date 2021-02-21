import React, { useState, useCallback } from 'react'
import {MdAdd} from 'react-icons/md';
import '../scss/TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(
        e => {
            setValue(e.target.value);
            console.log(value);
        },
        []
    )

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');

            //onSubmit 이벤트는 새로고침 발생시키므로 preventDefault 사용
            e.preventDefault();
        },
        [onInsert, value] //onInsert나 value 변경되었을 때만 onSubmit 새로 생성
    )

    return (
        <form className = 'TodoInsert' onSubmit = {onSubmit}>
            <input placeholder = '할 일을 입력하세요' 
                value = {value} onChange = {onChange}/>
            <button type = 'submit'>
                <MdAdd />
            </button>
        </form>
    )
}

export default TodoInsert
