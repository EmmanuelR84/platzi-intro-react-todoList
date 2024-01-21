import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch/todoSearch';
import { TodoList } from '../Components/TodoList/todoList';
import { CreateTodoButton } from '../Components/CreateTodoButton/createTodoButton';
import { TodoItem } from '../Components/TodoItem/todoItem';

const AppUI = ({
  completedTodo,
  totalTodo,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo
}) => {
  return (
    <>

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

    </>
  );
};

export { AppUI };