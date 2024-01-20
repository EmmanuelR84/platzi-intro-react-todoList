import './todoList.css';

const TodoList = ({ children }) => {
  return(
    <ul>
      { children }
    </ul>
  );
}

export { TodoList };