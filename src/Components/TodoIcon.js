import { ReactComponent as CheckSVG } from '../Components/check.svg';
import { ReactComponent as DeleteSVG } from '../Components/delete.svg';

const iconType = {
  'check': < CheckSVG />,
  'delete': < DeleteSVG />
}

const TodoIcon = ({type}) => {
  return(
    <span
      className={`icon icon-svg icon__${type}`}
    >
      { iconType[type] }
    </span>
  );
};

export { TodoIcon };