import React from "react";
import "./styles.css";
export function Sidebar(props) {
  const todoArray = props.Todo.map((todo, index) => (
    <div key={todo.id} className="todoitems">
      <div
        className={`title ${
          todo.id === props.currentTodo.id ? "selected-note" : ""
        }`}
        onClick={() => props.setTodoId(todo.id)}
      >
        <h3>
          Todo {index + 1}&nbsp;
          <button
            onClick={(event) => props.delete(event, todo.id)}
            id="delete-btn"
          >
            delete
          </button>
          <button className="finished" onClick={props.completedTasks}>
            Finished
          </button>
        </h3>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="sidebarheader">
        <h4>
          ADD NOTES&nbsp;{" "}
          <button
            onClick={() => {
              props.newTodo();
            }}
            id="addbutton"
          >
            +
          </button>
        </h4>
      </div>
      {todoArray}
    </div>
  );
}
