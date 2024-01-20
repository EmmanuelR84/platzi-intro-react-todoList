import './todoCounter.css';

const TodoCounter = ({ total, completed }) => {
  return(
    <h2>
      Has completado <strong>{completed}</strong> de <strong>{total}</strong> TODOS
    </h2>
  );
}

export { TodoCounter };