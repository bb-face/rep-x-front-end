import './App.css'

import { StarknetProvider } from './components/StarknetProvider'
import UserWallet from './components/UserWallet'

function App() {
  return (
    <StarknetProvider>
      <UserWallet />
    </StarknetProvider>
  )
}
 
export default App
