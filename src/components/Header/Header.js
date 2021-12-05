import './Header.css'

const Header = ({ handleMenu, title, afterChevron }) => {
  return (
    <header className="header">
      <img
        className="menu"
        src="/assets/menu.svg"
        alt="Menu"
        onClick={handleMenu}
      />
      <h1>{title}</h1>
      {afterChevron ? <img src="/assets/chevron.svg" alt="Chevron" /> : ''}
      <h1>{afterChevron}</h1>
    </header>
  )
}

export default Header
