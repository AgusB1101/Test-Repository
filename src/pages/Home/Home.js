import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import './Home.css'

const Home = ({ handleMenu }) => {
  return (
    <>
      <Header handleMenu={handleMenu} title="¡Hola Olivia!" />
      <Content>Este es un contenido</Content>
    </>
  )
}

export default Home
