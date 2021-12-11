import './SearchBar.css'

const SearchBar = ({ placeholder = '', addClass = '' }) => {
  return (
    <div className={'searchBar ' + addClass}>
      <input
        className="searchBarInput"
        type="text"
        placeholder={placeholder}
        name="searchBar"
      />
      <img className="searchBarBtn" src="/assets/magnify.svg" alt="Buscar" />
    </div>
  )
}

export default SearchBar
