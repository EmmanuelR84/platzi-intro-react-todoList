import React from 'react';
import { useState } from 'react';
import { useLocalStorage } from './Components/customUses/customUses';
import './Components/bases/variables.css';
import { AppUI } from './App/appUI';

// const defaultTodos = [
//   { text: 'Cortar cebollas', completed: true },
//   { text: 'Tomar el curso de introduccion a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'Lalalalala', completed: false },
//   { text: 'agregando una nueva tarea', completed: true },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_V1');

//convertir string en js y guardarlos en una variable
//const stringifiedTodos = JSON.stringify(defaultTodos)

//convertirlos en un array
//JSON.parse(stringifiedTodos)

function App() {

const [searchValue, setSearchValue] = useState('');

//El item de la func seria el todos y luego va la funcion q se creo en la funcion useslocalStorage. Los parametros serian el nombre del lugar donde se guardaran(itemName) y como iniciarlo([])
const [todos,saveTodos] =useLocalStorage('TODOS_V1', []);

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
  saveTodos(newTodos);
};
//eliminar todo
const deleteTodo = (text) => {
  const newTodos = [...todos]
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
  );
  newTodos.splice(todoIndex, 1);
  saveTodos(newTodos);
};

  return(
    < AppUI
      completedTodo={completedTodo}
      totalTodo={totalTodo}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
