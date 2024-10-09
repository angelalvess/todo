import React, { useState } from "react";
import DeleteButton from "./DeleteButton";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", isCompleted: false },
    { id: 2, text: "Wal the dog", isCompleted: true },
    { id: 3, text: "Do laundry", isCompleted: false },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`font-medium flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]
          ${todo.isCompleted ? "line-through text-gray-400" : ""} `}
        >
          <span>{todo.text}</span>
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
