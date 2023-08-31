import ListProvider from './providers/ListProvider';
import './App.css';
import TodoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <ListProvider>
        <ToDoForm />
        <TodoList />
      </ListProvider>
    </div>
  );
}

export default App;
