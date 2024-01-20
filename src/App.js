import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoSearch } from './Components/TodoSearch/todoSearch';
import { TodoList } from './Components/TodoList/todoList';
import { CreateTodoButton } from './Components/CreateTodoButton/createTodoButton';
import { TodoItem } from './Components/TodoItem/todoItem';
import React from 'react';
import './App.css';

const defaultTodos = [
  { text: 'Cortar cebollas', completed: false },
  { text: 'Tomar el curso de introduccion a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'Lalalalala', completed: false },
]

function App() {
  return (
    <React.Fragment>

      < TodoCounter completed={16} total={25} />
      < TodoSearch />

      < TodoList >
        { defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        )) }
      </ TodoList >

      < CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
