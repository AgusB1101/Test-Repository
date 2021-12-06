import Header from '../../../components/Header/Header'
import './StoreNew.css'

const StoreNew = ({ handleMenu }) => {
  return (
    <>
      <Header handleMenu={handleMenu} title="Tiendas" afterChevron="Nueva" />
    </>
  )
}

export default StoreNew
