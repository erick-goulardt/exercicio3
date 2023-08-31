import { ReactNode, createContext, useContext, useState } from "react";

interface TodoContextType {
    todoList: string[];
    getNumberOfItems: () => number;
    addTodoItem: (todoItem: string) => void;
    removeTodoItem: (index: number) => void;
}

const TodoContext = createContext<TodoContextType>({} as TodoContextType);

const ListProvider = ({ children }: {children: ReactNode}) => {
    const [todoList, setToDoList] = useState<string[]>([]);

    const getNumberOfItems = () => todoList.length;

    const addTodoItem = (newTodoItem: string) => {
        setToDoList([...todoList, newTodoItem])
    };

    const removeTodoItem = (index: number) => {
        const updatedList = [...todoList];
        updatedList.splice(index, 1);
        setToDoList(updatedList);
    };

    const contextValue = {todoList, getNumberOfItems, addTodoItem, removeTodoItem};

    return (
        <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
    );
};

export const useTodoContext = () =>  {
    const context = useContext(TodoContext);
    if (context === undefined) {
      throw new Error("useTodoContext must be used within a TodoProvider");
    }
    return context;
};

export default ListProvider;