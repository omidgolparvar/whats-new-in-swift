import { createContext } from 'react'

const VersionsContext = createContext()
const { Provider, Consumer } = VersionsContext

export { Consumer, Provider }
export default VersionsContext
