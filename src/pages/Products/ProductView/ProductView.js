import { useParams } from 'react-router'
import Header from '../../../components/Header/Header'
import './ProductView.css'

const ProductView = ({ handleMenu }) => {
  const { id } = useParams()
  return (
    <>
      <Header
        handleMenu={handleMenu}
        title="Productos"
        backTo="/products"
        afterChevron={'#' + id}
        deleteBtn
      />
    </>
  )
}

export default ProductView
