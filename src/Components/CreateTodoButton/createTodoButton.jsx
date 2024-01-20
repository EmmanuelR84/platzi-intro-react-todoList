import './createTodoButton.css';

const CreateTodoButton = () => {

  const newTask = () => {
    console.log('Click al btn');
  }

  return(
    <div className='div__btn'>
      <button onClick={newTask}>+</button>
    </div>
  );
}

export { CreateTodoButton };