import Content from '../../components/Content/Content'
import Header from '../../components/Header/Header'
import './Home.css'

const Home = ({ handleMenu }) => {
  return (
    <>
      <Header handleMenu={handleMenu} title="¡Hola Olivia!" />
      <Content>This is a content</Content>
    </>
  )
}

export default Home
