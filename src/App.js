import { TodoCounter } from './Components/TodoCounter/TodoCounter';
import { TodoSearch } from './Components/TodoSearch/todoSearch';
import { TodoList } from './Components/TodoList/todoList';
import { CreateTodoButton } from './Components/CreateTodoButton/createTodoButton';
import { TodoItem } from './Components/TodoItem/todoItem';
import React from 'react';
import { useState } from 'react';
import './Components/bases/variables.css';

const defaultTodos = [
  { text: 'Cortar cebollas', completed: true },
  { text: 'Tomar el curso de introduccion a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'Lalalalala', completed: false },
  { text: 'agregando una nueva tarea', completed: true },
]



function App() {

const [searchValue, setSearchValue] = useState('');
const [todos,setTodos] =useState(defaultTodos);

//filtrar tareas completadas ( !! doble negacion no es necesario, pero de esta forma sabemos que estamos trabajando con booleanos)
const completedTodo = todos.filter(todo => !!todo.completed).length;

//contar la cantidad total de toDo
const totalTodo = todos.length;

//buscando toDos
const searchedTodos = todos.filter(
  (todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  }
);

//completar todo
const completeTodo = (text) => {
  const newTodos = [...todos]
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
  setTodos(newTodos);
};
//eliminar todo
const deleteTodo = (text) => {
  const newTodos = [...todos]
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos.splice(todoIndex, 1);
  setTodos(newTodos);
};

  return (
    <React.Fragment>

      < TodoCounter completed={completedTodo} total={totalTodo} />
      < TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      < TodoList >
        { searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={ () => completeTodo(todo.text)}
            onDelete={ () => deleteTodo(todo.text)}
          />
        )) }
      </ TodoList >

      < CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
