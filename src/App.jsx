import ReclaimButton from './components/ReclaimButton';
import { StarknetProvider } from './components/StarknetProvider';
import UserWallet from './components/UserWallet';

function App() {
  return (
    <StarknetProvider>
      <div className="min-h-screen bg-gray-100 p-4 flex flex-col">
        <h1 className="text-3xl font-bold text-center mb-6">RepX</h1>
        <UserWallet />
        <ReclaimButton />
      </div>
    </StarknetProvider>
  );
}

export default App;
