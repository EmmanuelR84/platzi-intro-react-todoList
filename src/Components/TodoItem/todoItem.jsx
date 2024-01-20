import './todoItem.css';

const TodoItem = (props) => {
  return(
    <li className='li__item'>
      <spam className={`tilde ${props.completed && 'tilde--active'}`}>V {props.completed} </spam>
      <p className={`textTask ${props.completed && 'li__item-through'}`}>{props.text}</p>
      <spam className='close'>X</spam>
    </li>
  );
}

export { TodoItem };