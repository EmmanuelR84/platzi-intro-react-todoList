import { TodoIcon } from '../TodoIcon/TodoIcon';
import './deleteIcon.css';

const DeleteIcon = ({onDelete}) => {
  return(
    < TodoIcon
      type='delete'
      color='gray'
      onClick={onDelete}
    />
  );
};

export { DeleteIcon };