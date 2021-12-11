import Content from '../../../components/Content/Content'
import Header from '../../../components/Header/Header'
import ItemBox from '../../../components/ItemBox/ItemBox'
import Loader from '../../../components/Loader/Loader'
import './ProductsList.css'

const ProductsList = ({ handleMenu, products }) => {
  return (
    <Loader>
      <Header handleMenu={handleMenu} title="Productos" searchBar addBtn />
      <Content>
        {products?.map((product) => (
          <ItemBox
            key={product._id}
            img={product.image}
            title={product.title}
            id={product._id}
            altImg="/assets/package.svg"
          />
        ))}
      </Content>
    </Loader>
  )
}

export default ProductsList
