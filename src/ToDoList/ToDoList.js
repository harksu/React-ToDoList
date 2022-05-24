import React from 'react'
import TodoListitem from './TodoListitem'
import '../styles/TodoList.scss'

const ToDoList = ({ todos, onRemove }) => {
    return (
        <div className='TodoList'>
            {todos.map(todo => ( // 컴포넌트를 반환하는데, 맵핑을 통해서 해당 컴포넌트에 객체에 대한 정보를 프랍스로 넘김, 삭제 함수도 넘기고.
                <TodoListitem todo={todo} key={todo.id} onRemove={onRemove} />
            ))}
        </div>
    )
}

export default ToDoList