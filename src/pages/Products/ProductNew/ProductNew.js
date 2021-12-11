import Header from '../../../components/Header/Header'
import './ProductNew.css'

const ProductNew = ({ handleMenu }) => {
  return (
    <>
      <Header
        handleMenu={handleMenu}
        title="Productos"
        afterChevron="Nuevo"
        backTo="/products"
      />
    </>
  )
}

export default ProductNew
