import './createTodoButton.css';

const CreateTodoButton = () => {
  return(
    <div className='div__btn'>
      <button 
        onClick={
          () => {console.log('Click al btn');}
        }
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };