import logo from './logo.svg';
import './App.css';
import TodoInsert from './ToDoList/TodoInsert'
import ToDoList from './ToDoList/ToDoList';
import ToDoCase from './ToDoList/ToDoCase';
import { useState, useRef, useCallback } from 'react';
import BackGround from './ToDoList/BackGround';


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트는 너무 어려웡',
      //checked: true,
    },
    {
      id: 2,
      text: '리눅스는 너무 어려웡',
      //checked: true,
    },
    {
      id: 3,
      text: '학교공부는 너무 어려웡',
      // checked: false,
    }
    // 일단은 예시용으로 객체 할당, 
  ]);
  const [count, setCount] = useState(3);

  const nextId = useRef(4); // id를 4부터 시작할 거니, 일단은 할당하는데 솔직히 useRef는 공부를 좀 더 해야 될듯 

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false, // 객체 할당 
      };
      setTodos(todos.concat(todo)) //리스트로 객체 관리 
      nextId.current += 1; // 다음 객체는 id +1
      setCount(count + 1);
    }, [todos] // todos가 변경될 때 마다 함수를 새로 생성(해당 함수는, todos의 영향을 받으므로 새로 정의되어야함)
  )

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter(todo => todo.id !== id)); // 삭제 함수, 선택된 id가 아닌 객체들로만 새로운 리스트를 만듬, 객체의 변화의 영향을 받으니까 2번째 인자로 todos 
      setCount(count - 1);
    },
    [todos]
  )



  return (
    // 정렬을 위해서 케이스 컴포넌트 만들고, 감싸도록 수정 
    <BackGround>
      <ToDoCase count={count}>
        <TodoInsert onInsert={onInsert}></TodoInsert> {/* 입력 컴포넌트엔 입력 함수만 필요하면 되니까 해당 함수 프랍스로 넘김 */}
        <ToDoList todos={todos} onRemove={onRemove} /> {/* 렌더링을 위한 컴포넌트, 해당 리스트 컴포넌트는 요소들을 컴포넌트로 가지고 있으며 삭제를 위한 함수도 프랍스로 넘김 */}
      </ToDoCase>
    </BackGround>


  );
}

export default App;
