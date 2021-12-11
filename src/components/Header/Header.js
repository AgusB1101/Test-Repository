import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar'
import './Header.css'

const Header = ({
  handleMenu,
  title,
  afterChevron,
  deleteBtn,
  addBtn,
  backTo,
  searchBar,
}) => {
  const location = useLocation()

  const [scrollHeight, setScrollHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [hasScrollBar, setHasScrollBar] = useState(false)

  const handleDelete = () => {}

  useEffect(() => {
    const content = document.querySelector('.content')
    setWindowHeight(window.innerHeight)
    setScrollHeight(content?.clientHeight)
    setHasScrollBar(windowHeight < scrollHeight)
  }, [location, windowHeight, scrollHeight])

  return (
    <header className="header" tabIndex={1}>
      <div className="haederTitleContainer">
        <img
          className="menu"
          src="/assets/menu.svg"
          alt="Menu"
          onClick={handleMenu}
        />
        {backTo ? (
          <Link to={backTo}>
            <h2>{title}</h2>
          </Link>
        ) : (
          <h2>{title}</h2>
        )}
        {afterChevron ? (
          <img className="chevron" src="/assets/chevron.svg" alt="Chevron" />
        ) : (
          ''
        )}
        <h2>{afterChevron}</h2>
      </div>

      <div className={'rightHeader ' + (hasScrollBar ? 'hasScrollBar' : '')}>
        {searchBar && (
          <SearchBar placeholder={`Buscar ${title.toLowerCase()}`} />
        )}

        {addBtn && (
          <Button to={window.location.pathname + '/new'} centered>
            Agregar {title.slice(0, title.length - 1)}{' '}
          </Button>
        )}

        {deleteBtn && (
          <span className="deleteBtnContainer">
            <button className="btn" type="button" onClick={handleDelete}>
              <span className="btnContent centerContent">Eliminar</span>
            </button>
          </span>
        )}
      </div>
    </header>
  )
}

export default Header
