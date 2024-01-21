import { CompleteIcon } from '../CompleteIcon/completeIcon';
import { DeleteIcon } from '../DeleteIcon/deleteIcon';
import './todoItem.css';

const TodoItem = (props) => {
  return(
    <li className='li__item'>
      < CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p className={`textTask ${props.completed && 'li__item-through'}`}>{props.text}</p>
      < DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };