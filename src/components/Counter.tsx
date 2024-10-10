import React from "react";
import { useAppContext } from "../hooks/useAppContext";

function Counter() {
  const { todos, setTodos } = useAppContext();

  return (
    <p>
      <b>{todos.filter((todo) => todo.isCompleted).length}</b> / {todos.length}{" "}
      todos completed
    </p>
  );
}

export default Counter;
