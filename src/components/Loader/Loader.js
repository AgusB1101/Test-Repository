import { usePromiseTracker } from 'react-promise-tracker'
import Content from '../Content/Content'
import Elsa from '../Elsa/Elsa'

const Loader = ({ children }) => {
  const { promiseInProgress } = usePromiseTracker()
  return promiseInProgress ? (
    <>
      <Content>
        <Elsa>
          Cargando... <br /> Aguarde un momento
        </Elsa>
      </Content>
    </>
  ) : (
    <>{children}</>
  )
}

export default Loader

//Cargando... <br /> Aguarde un momento
