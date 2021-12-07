import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import HomeBox from '../../components/HomeBox/HomeBox'
import './Home.css'
import Loader from '../../components/Loader/Loader'

const Home = ({ handleMenu, products, stores }) => {
  return (
    <Loader>
      <Header handleMenu={handleMenu} title="¡Hola Olivia!" />
      <Content>
        <HomeBox
          to="/products"
          img="/assets/package.svg"
          name="Productos"
          qty={products.length}
        />
        <HomeBox
          to="/stores"
          img="/assets/store.svg"
          name="Tiendas"
          qty={stores.length}
        />
      </Content>
    </Loader>
  )
}

export default Home
