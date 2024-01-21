import { ReactComponent as CheckSVG } from '../check.svg';
import { ReactComponent as DeleteSVG } from '../delete.svg';
import './todoIcon.css';

const iconType = {
  'check': (color) => < CheckSVG className='icon-svg' fill={color} />,
  'delete': (color) => < DeleteSVG className='icon-svg' fill={color} />
}

const TodoIcon = ({type, color, onClick}) => {
  return(
    <span
      className={`icon__container icon__container-${type}`}
      onClick={onClick}
    >
      { iconType[type](color) }
    </span>
  );
};

export { TodoIcon };