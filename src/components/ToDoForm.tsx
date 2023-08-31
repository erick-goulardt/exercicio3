import { FormEvent, useState } from "react";
import { useTodoContext } from "../providers/ListProvider";

const ToDoForm = () => {
    const { getNumberOfItems, addTodoItem } = useTodoContext();
    const [todoItem, setTodoItem] = useState("");
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if(!todoItem) {
            return;
        }
        
       addTodoItem(todoItem);
       setTodoItem("")
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <h3>Total of Todo Items: {getNumberOfItems()}</h3>
            <input 
                value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
                type="text" />
            <button type="submit">Create</button>
        </form>
    )
}

export default ToDoForm;