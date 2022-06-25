import React from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import "../styles/TodoListitem.scss";
import { todos } from "../atoms/todos";
import { useRecoilValue } from "recoil";

const TodoListitem = ({ todo, onRemove }) => {
  // const todosRecoil = useRecoilValue(todos);

  const { id, text } = todo; // 여긴 무조건 프랍스 받아야 됨 ? 안받으려면 여기서 맵핑으로 돌려야되나?

  return (
    <section className="TodoListitem">
      <div className="text">할 일 : {text}</div>
      <div className="remove" onClick={() => onRemove(id)}>
        삭제
        <MdRemoveCircleOutline />
      </div>
    </section>
  );
};

export default TodoListitem;
