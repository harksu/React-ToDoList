import React from "react";
import { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md"; // 리액트 아이콘 스타일링
import "../styles/TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  //제출 함수 제공받고
  const [value, setValue] = useState(""); // 기본적으로 입력값을 useState로 관리하다가

  const onChange = useCallback((e) => {
    //어차피 입력값을 변화할 때마다 리빌딩하는건 아무것도 참조할 필요가 없으므로 빈배열, 그리고 새로 만들 필요도 없으므로 최적화ㅓ를 위해서 콜백을 사용
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    //얘도 최적화를 위해서 콜백으로 사용하는데, 제출은 현재 입력값과 그 입력에 따른 todo list에 저장되어 있는 객체의 변화에 따라서 렌더링 되어야 하는 todo가 바뀌므로 빈배열 x
    (e) => {
      e.preventDefault(); //순서 수정
      if (value !== "") {
        //일정 없는데 저장하는거 마음에 안들어서 밀었습니다.
        onInsert(value); // 입력되있는 값을 저장하고
        setValue(""); // 입력값 밀어버리고
        // 새로고침 막고
      } else window.alert("일정을 입력해주세요");
    },
    [onInsert, value] // 해당 두 값의 변화에 따라서 함수를 새로 정의
  );
  return (
    <section>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          placeholder="to do something"
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <MdAdd />
        </button>
      </form>
    </section>
  );
};

export default TodoInsert;
