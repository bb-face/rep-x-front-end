import { StarknetProvider } from './components/StarknetProvider'
import UserWallet from './components/UserWallet'

function App() {
  return (
    <StarknetProvider>
      <UserWallet />
      <div className="bg-yellow-300 h-10 w-full">hello</div>
    </StarknetProvider>
  )
}
 
export default App
