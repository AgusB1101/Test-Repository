import Content from '../../components/Content/Content'
import Elsa from '../../components/Elsa/Elsa'
import Header from '../../components/Header/Header'
import './NotFound.css'

const NotFound = ({ handleMenu }) => {
  return (
    <>
      <Header handleMenu={handleMenu}></Header>
      <Content>
        <Elsa>
          ¡Oops! <br /> No encontramos lo que buscabas
        </Elsa>
      </Content>
    </>
  )
}

export default NotFound
