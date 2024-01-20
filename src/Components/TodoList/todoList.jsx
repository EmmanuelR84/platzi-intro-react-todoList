import './todoList.css';

const TodoList = (props) => {
  return(
    <ul>
      { props.children }
    </ul>
  );
}

export { TodoList };