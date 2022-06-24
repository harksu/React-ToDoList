import React from "react";
import "../styles/ToDoCase.scss"; //이거 경로 단축할 수 있으면 좋을 것 같은데 나중에 공부하기

const ToDoCase = ({ children, count }) => {
  return (
    <div className="ToDoCase">
      <div className="title">당신의 일정 = {count} 개</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default ToDoCase;
