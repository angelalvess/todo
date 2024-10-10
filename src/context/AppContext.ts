import { createContext } from "react";

// Definindo o tipo do todo
export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
};

// Definindo o tipo do contexto
type AppContextType = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);
