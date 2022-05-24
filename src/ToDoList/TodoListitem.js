import React from 'react'
import { MdRemoveCircleOutline } from 'react-icons/md';
import '../styles/TodoListitem.scss'
const TodoListitem = ({ todo, onRemove }) => {
    const { id, text, checked } = todo; // 분해할당, 나중에 수정 등 추가해야되면 체크가 필요하므로 일단 유지 
    //투두 리스트의 일정을 나타내느 컴포넌트, 단순 렌더링만 하면 되지만 체크 박스를 누르면 파라미터에 해당하는 id의 객체가 사라져야
    return (
        <section className='TodoListitem' >
            <div className='text'>할 일 :{text}</div>
            <div className='remove' onClick={() => onRemove(id)}>
                삭제
                <MdRemoveCircleOutline />
            </div>
        </section>
    )
}

export default TodoListitem