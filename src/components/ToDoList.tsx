import { useTodoContext } from "../providers/ListProvider";

const TodoList = () => {
    const { todoList, removeTodoItem } = useTodoContext();
    return (
        <ul>
            {todoList.map((todo, index) => (
                <li key={index}>{todo} <button onClick={() => removeTodoItem(index)}>Delete</button></li>
            ))}
        </ul>
    );
};

export default TodoList;