import { usePromiseTracker } from 'react-promise-tracker'
import Elsa from '../Elsa/Elsa'

const Loader = ({ children }) => {
  const { promiseInProgress } = usePromiseTracker()
  return promiseInProgress ? (
    <Elsa>
      Cargando... <br /> Aguarde un momento
    </Elsa>
  ) : (
    <>{children}</>
  )
}

export default Loader
