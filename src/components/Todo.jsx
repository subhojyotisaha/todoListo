import React from "react";

function Todo(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
        onClick={props.toggleComplete}
      >
        {props.todo.text}
      </div>
      <button onClick={props.deleteTodo}>X</button>
    </div>
  );
}

export default Todo;
