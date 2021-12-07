import './ItemBox.css'

const ItemBox = ({ title, img, id, altImg }) => {
  const setAltImg = (e) => {
    e.target.src = altImg
  }

  return (
    <div className="itemBox">
      <div className="itemBoxInfo">
        <img src={img} alt={id} className="itemBoxImg" onError={setAltImg} />
        <div className="itemBoxTitleId">
          <span className="itemBoxTitle">{title}</span>
          <span className="itemBoxId">{'#' + id}</span>
        </div>
      </div>
      <img
        src="/assets/chevron.svg"
        alt="Chevron"
        className="chevron width2rem"
      />
    </div>
  )
}

export default ItemBox
