import './todoCounter.css';

const TodoCounter = ({ total, completed }) => {
  return(
    <h2>
      Has completado {completed} de {total} TODOS
    </h2>
  );
}

export { TodoCounter };