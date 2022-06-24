import { atom } from "recoil";

export const todos = atom({
  key: "todoList",
  default: [
    {
      id: 1,
      text: "리액트는 너무 어려웡",
    },
    {
      id: 2,
      text: "리눅스는 너무 어려웡",
    },
    {
      id: 3,
      text: "학교공부는 너무 어려웡",
    },
  ],
});
