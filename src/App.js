import "./App.css";
import TodoInsert from "./ToDoList/TodoInsert";
import ToDoList from "./ToDoList/ToDoList";
import ToDoCase from "./ToDoList/ToDoCase";
import { useState, useRef, useCallback } from "react";
import BackGround from "./ToDoList/BackGround";
import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
} from "recoil";
import { todos } from "./atoms/todos.js";

function App() {
  const [todoList, setTodoList] = useRecoilState(todos); // state 관리, 초기 값은 todos라는 배열(전역 상태 관리)
  const [count, setCount] = useState(3);
  const nextId = useRef(4); // id를 4부터 시작할 거니, 일단은 할당하는데 솔직히 useRef는 공부를 좀 더 해야 될듯 ++ 해도 부족하니까 더 하셈
  const todosRecoil = useRecoilValue(todos); //이게 todoList랑 같은게 맞는건가 ..?
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
      };
      setTodoList(todosRecoil.concat(todo)); //리스트로 객체 관리
      nextId.current += 1; // 다음 객체는 id +1
      setCount(count + 1);
    },
    [todoList] // todos가 변경될 때 마다 함수를 새로 생성(해당 함수는, todos의 영향을 받으므로 새로 정의되어야함)
  );

  const onRemove = useCallback(
    (id) => {
      if (window.confirm("해당 일정을 삭제하시겠습니까?")) {
        setTodoList(todosRecoil.filter((todo) => todo.id !== id)); // 삭제 함수, 선택된 id가 아닌 객체들로만 새로운 리스트를 만듬, 객체의 변화의 영향을 받으니까 2번째 인자로 todos
        setCount(count - 1);
      } else return;
    },
    [todoList]
  );

  const onRemoveAll = useCallback(() => {
    if (window.confirm("전체 일정을 삭제합니다.")) {
      setTodoList([]);
      setCount(0);
    } else return;
  }, []);
  return (
    // 정렬을 위해서 케이스 컴포넌트 만들고, 감싸도록 수정
    <BackGround>
      <ToDoCase count={count}>
        <TodoInsert onInsert={onInsert} onRemoveAll={onRemoveAll}></TodoInsert>
        {/* 입력이랑, 전체 삭제랑  */}
        <ToDoList onRemove={onRemove} />
        {/* 렌더링을 위한 컴포넌트, 해당 리스트 컴포넌트는 요소들을 컴포넌트로 가지고 있으며 삭제를 위한 함수도 프랍스로 넘김 */}
      </ToDoCase>
    </BackGround>
  );
}

export default App;
