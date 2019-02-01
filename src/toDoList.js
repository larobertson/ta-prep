import React from "react";
import ToDoListEntry from "./toDoListEntry";

const toDoList = props => {
  return (
    <ol>
      {props.todos.slice(0, 5).map((todo, index) => {
        return <ToDoListEntry todo={todo} key={index} />;
      })}
    </ol>
  );
};
export default toDoList;
