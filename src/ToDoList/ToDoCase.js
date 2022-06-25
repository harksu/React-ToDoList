import React from "react";
import "../styles/ToDoCase.scss"; //이거 경로 단축할 수 있으면 좋을 것 같은데 나중에 공부하기

const ToDoCase = ({ children, count }) => {
  const showTime = () => {
    const today = new Date();
    const time = {
      year: today.getFullYear(), //현재 년도
      month: today.getMonth() + 1, // 현재 월
      date: today.getDate(), // 현제 날짜
      hours: today.getHours(), //현재 시간
      minutes: today.getMinutes(), //현재 분
    };
    const { year, month, date, hours, minutes } = time; //구조 분해 할당 연습할겸,,, 꾸밀 게 없어서 추가했습니다..
    return `접속 시간 : ${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분`;
  };
  return (
    <div className="ToDoCase">
      <div className="title">
        {showTime()}의 당신의 일정 = {count} 개
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default ToDoCase;
