import Header from '../../../components/Header/Header'
import Content from '../../../components/Content/Content'
import ItemBox from '../../../components/ItemBox/ItemBox'
import Loader from '../../../components/Loader/Loader'
import './StoresList.css'

const StoresList = ({ handleMenu, stores }) => {
  return (
    <Loader>
      <Header handleMenu={handleMenu} title="Tiendas" searchBar addBtn />
      <Content>
        {stores?.map((store) => (
          <ItemBox
            key={store._id}
            img={store.logo}
            title={store.name}
            id={store._id}
            altImg="/assets/store.svg"
          />
        ))}
      </Content>
    </Loader>
  )
}

export default StoresList
