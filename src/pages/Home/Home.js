import Button from '../../components/Button/Button'
import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import './Home.css'

const Home = ({ handleMenu }) => {
  return (
    <>
      <Header handleMenu={handleMenu} title="¡Hola Olivia!" />
      <Content>
        <Button to="/stores/new " centered>
          Ver listado
        </Button>
      </Content>
    </>
  )
}

export default Home
