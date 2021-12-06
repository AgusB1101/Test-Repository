import { useEffect, useState } from 'react'
import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import HomeBox from '../../components/HomeBox/HomeBox'
import myApi from '../../utils/API_Requests'
import { trackPromise } from 'react-promise-tracker'
import './Home.css'
import Loader from '../../components/Loader/Loader'

const Home = ({ handleMenu }) => {
  const [products, setProducts] = useState(0)
  const [stores, setStores] = useState(0)

  useEffect(() => {
    trackPromise(
      myApi.get('products').then(({ data }) => setProducts(data.length))
    )
    trackPromise(
      myApi.get('products').then(({ data }) => setProducts(data.length))
    )
    trackPromise(myApi.get('stores').then(({ data }) => setStores(data.length)))
  }, [])

  return (
    <Loader>
      <Header handleMenu={handleMenu} title="¡Hola Olivia!" />
      <Content>
        <HomeBox
          to="/products"
          img="/assets/package.svg"
          name="Productos"
          qty={products}
        />
        <HomeBox
          to="/stores"
          img="/assets/store.svg"
          name="Tiendas"
          qty={stores}
        />
      </Content>
    </Loader>
  )
}

export default Home
