import React from "react";
import { useRecoilValue } from "recoil";
import { todos } from "../atoms/todos";
import "../styles/TodoList.scss";
import TodoListitem from "./TodoListitem";

//전역 관리면 여기서 프랍스로 안받아도 되야 되는거 아닌가 -> 이거 해결을 useRecoilValue

const ToDoList = ({ onRemove }) => {
  const todosRecoil = useRecoilValue(todos); //이걸로 전역 관리를 하는 atom 값을 땡겨오니까, 프랍스를 받을 필요가 없는거임
  console.log(todosRecoil); // 디버깅용
  return (
    <div className="TodoList">
      {todosRecoil?.map(
        (
          todo //여긴 무조건 props를 넘겨야 되나? 맵핑으로 리스트를 뿌려야 되니까 ? ㅇㅇ 맞는거임
        ) => (
          <TodoListitem todo={todo} key={todo.id} onRemove={onRemove} />
        )
      )}
    </div>
  );
};

export default ToDoList;
