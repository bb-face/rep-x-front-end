import ReclaimButton from './components/ReclaimButton';
import { StarknetProvider } from './components/StarknetProvider';
import InteractWithSmartContract from './components/InteractWithSmartContract';
import Navbar from './components/UI/Navbar';


function App() {
  return (
    <StarknetProvider>
      <div className="min-h-screen bg-black p-4 flex flex-col gap-y-4 font-noto-sans">
        <Navbar />
        <InteractWithSmartContract />
        <ReclaimButton />
      </div>
    </StarknetProvider>
  );
}

export default App;
