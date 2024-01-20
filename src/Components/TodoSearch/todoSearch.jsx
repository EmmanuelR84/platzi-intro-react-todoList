import './todoSerch.css';

const TodoSearch = () => {

  const search = (e) => {
    console.log(e.target.value);
  }

  return(
    <div className='div__search'>
    <input placeholder='Cortar cebolla' onChange={search} />
    </div>
  );
}

export { TodoSearch };