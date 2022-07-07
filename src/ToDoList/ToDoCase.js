import React from "react";
import { useState, useEffect } from "react";
import "../styles/ToDoCase.scss"; //이거 경로 단축할 수 있으면 좋을 것 같은데 나중에 공부하기

const ToDoCase = ({ children, count }) => {
  const [time, setTime] = useState(new Date());
  const day = ["일", "월", "화", "수", "목", "금", "토"];

  useEffect(() => {
    const liveTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(liveTime);
  }, []);

  return (
    <div className="ToDoCase">
      <div className="title">
        {time.toLocaleString()}
        {"\u00A0"}
        {day[time.getDay()]}
        <br />
        당신의 일정 = {count} 개
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default ToDoCase;
