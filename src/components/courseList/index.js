import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function CourseList() {
  let quantidade = 2;
  const courses = useSelector(state => state.data.slice(0, quantidade), [
    quantidade
  ]);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch({ type: "ADD_COURSE", title: "GraphQL" });
  }

  return (
    <>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Add
      </button>
      <button
        type="button"
        onClick={() => {
          quantidade = quantidade + 1;
          console.log(quantidade);
        }}
      >
        Add quantidade
      </button>
    </>
  );
}
