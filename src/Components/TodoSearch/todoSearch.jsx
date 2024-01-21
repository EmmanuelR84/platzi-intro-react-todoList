import './todoSerch.css';

const TodoSearch = (props) => {

  return(
    <div className='div__search'>
    <input 
      placeholder='Cortar cebolla'
      value={props.searchValue}
      onChange={(e) => {
        props.setSearchValue(e.target.value);
      }}
    />
    </div>
  );
}

export { TodoSearch };