import { useState } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { v4 } from "uuid";
import Button from "./Button";

const TODOLIMIT = 3;

function AddTodoForm() {
  const { todos, setTodos } = useAppContext();
  const [inputText, setInputText] = useState("");

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    if (todos.length >= TODOLIMIT) {
      return alert("Log in or register to add more tasks");
    } else {
      const newTask = { id: v4(), text: inputText, isCompleted: false };
      setTodos([...todos, newTask]);
      setInputText("");
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="E.g. Buy groceries"
        type="text"
        className="border h-[45px] border-black/[12%] rounded-[5px]  my-[9px] text-[14px] block w-full px-[16px]"
      />
      <Button type="submit">Add to list</Button>
    </form>
  );
}

export default AddTodoForm;
