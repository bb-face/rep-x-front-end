import ReclaimButton from './components/ReclaimButton';
import { StarknetProvider } from './components/StarknetProvider';
import InteractWithSmartContract from './components/InteractWithSmartContract';
import Navbar from './components/UI/Navbar';
import { Boxes } from './components/UI/Background';
import { cn } from './utils/background';

function App() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-500 flex flex-col items-center justify-center rounded-lg font-noto-sans">
      <Boxes />
      <StarknetProvider>
        <div className="absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <div className={cn("md:text-4xl text-xl text-white relative z-20")}>
          <Navbar />
          <InteractWithSmartContract />
          <ReclaimButton />
        </div>
      </StarknetProvider>
    </div>
  );
}

export default App;
