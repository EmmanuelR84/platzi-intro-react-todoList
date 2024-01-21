import { CompleteIcon } from '../CompleteIcon/completeIcon';
import { DeleteIcon } from '../DeleteIcon/deleteIcon';
import './todoItem.css';

const TodoItem = (props) => {
  return(
    <li className='li__item'>
      < CompleteIcon />
      {/* <spam 
        className={`tilde ${props.completed && 'tilde--active'}`}
        onClick={props.onComplete}
      >V {props.completed} </spam> */}
      <p className={`textTask ${props.completed && 'li__item-through'}`}>{props.text}</p>
      < DeleteIcon />
      {/* <spam 
        className='close'
        onClick={props.onDelete}
      >X</spam> */}
    </li>
  );
}

export { TodoItem };