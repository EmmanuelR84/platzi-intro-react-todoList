import './todoList.css';

const TodoList = ({ children }) => {
  return(
    <div className='div__list'>
      <ul className='ul'>
        { children }
      </ul>
    </div>
  );
}

export { TodoList };