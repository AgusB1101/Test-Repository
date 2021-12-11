import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useWindowSize from '../../hooks/useWindowSize'
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
  const [width] = useWindowSize()

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
        <Link
          className="headerTitle"
          to={
            '/' +
            location.pathname.slice(1, location.pathname.length).split('/')[0]
          }
        >
          <h2>{title}</h2>
        </Link>
        {afterChevron ? (
          <img className="chevron" src="/assets/chevron.svg" alt="Chevron" />
        ) : (
          ''
        )}
        <h2>{afterChevron}</h2>
      </div>

      <div className={'rightHeader ' + (hasScrollBar ? 'hasScrollBar' : '')}>
        {searchBar && (
          <SearchBar
            placeholder={`Buscar ${title.toLowerCase()}`}
            addClass={width <= 1024 && 'roundInput'}
          />
        )}

        {addBtn && (
          <Button
            to={window.location.pathname + '/new'}
            centered
            addClass={width <= 1024 && 'roundBtn'}
          >
            {width <= 1024 ? (
              <img src="assets/plus.svg" alt="Add" className="plusIcon" />
            ) : (
              'Agregar ' + title.slice(0, title.length - 1)
            )}
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
