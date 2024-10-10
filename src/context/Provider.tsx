import { ReactNode, useEffect, useState } from "react";
import { AppContext, Todo } from "./AppContext";
import { v4 } from "uuid";

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  const initialTask: Todo[] = [
    { id: v4(), text: "Buy groceries", isCompleted: false },
  ];

  const [todos, setTodos] = useState<Todo[]>(() => {
    // Buscar tarefas salvas no localStorage
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : initialTask;
  });

  useEffect(() => {
    // Salvar tarefas no localStorage sempre que elas mudarem
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <AppContext.Provider value={{ todos, setTodos }}>
      {children}
    </AppContext.Provider>
  );
};
