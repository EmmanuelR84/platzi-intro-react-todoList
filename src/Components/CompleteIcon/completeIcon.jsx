import { TodoIcon } from '../TodoIcon/TodoIcon';
import './compliteIcon.css';

const CompleteIcon = ({completed, onComplete}) => {
  return(
    < TodoIcon
      type= 'check'
      color={completed ? '#4caf50' : 'gray'}
      onClick={onComplete}
    />
  );
};

export { CompleteIcon };