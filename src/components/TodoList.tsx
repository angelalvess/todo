import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import { useAppContext } from "../hooks/useAppContext";

const TodoList = () => {
  const { todos, setTodos } = useAppContext();

  const handleDeleteTask = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTask = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  return (
    <ul>
      {todos.length === 0 && (
        <li className="text-[14px] font-semibold h-full text-center items-center  flex justify-center">
          No tasks, yay! Add a new one
        </li>
      )}

      {todos.map((todo) => (
        <li
          key={todo.id}
          className="font-medium flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]
          "
          onClick={() => handleToggleTask(todo.id)}
        >
          <span
            className={`${
              todo.isCompleted ? "line-through text-gray-400" : ""
            }`}
          >
            {todo.text}
          </span>
          {todo.isCompleted && (
            <span className="text-[14px] text-gray-400"></span>
          )}
          <DeleteButton deleteTask={() => handleDeleteTask(todo.id)} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
