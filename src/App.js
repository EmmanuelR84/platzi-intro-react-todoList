import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoSearch } from './Components/TodoSearch/todoSearch';
import { TodoList } from './Components/TodoList/todoList';
import { CreateTodoButton } from './Components/CreateTodoButton/createTodoButton';
import { TodoItem } from './Components/TodoItem/todoItem';
import './App.css';

function App() {
  return (
    <div className="App">

      < TodoCounter />
      < TodoSearch />

      < TodoList >
        < TodoItem />
        < TodoItem />
        < TodoItem />
      </ TodoList >

      < CreateTodoButton />

    </div>
  );
}

export default App;
