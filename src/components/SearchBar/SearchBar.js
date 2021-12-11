import './SearchBar.css'

const SearchBar = ({ placeholder }) => {
  return (
    <div className="searchBar">
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
