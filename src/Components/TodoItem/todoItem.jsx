import './todoItem.css';

const TodoItem = (props) => {
  return(
    <li>
      <spam>V {props.completed} </spam>
      <p>{props.text}</p>
      <spam>X</spam>
    </li>
  );
}

export { TodoItem };