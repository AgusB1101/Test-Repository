import './Header.css'

const Header = ({ handleMenu, title, afterChevron, deleteBtn = false }) => {
  const handleDelete = () => {}

  return (
    <header className="header">
      <div className="haederTitleContainer">
        <img
          className="menu"
          src="/assets/menu.svg"
          alt="Menu"
          onClick={handleMenu}
        />
        <h2>{title}</h2>
        {afterChevron ? (
          <img className="chevron" src="/assets/chevron.svg" alt="Chevron" />
        ) : (
          ''
        )}
        <h2>{afterChevron}</h2>
      </div>

      {deleteBtn && (
        <span className="deleteBtnContainer">
          <button className="btn" type="button" onClick={handleDelete}>
            <span className="btnContent centerContent">Eliminar</span>
          </button>
        </span>
      )}
    </header>
  )
}

export default Header
