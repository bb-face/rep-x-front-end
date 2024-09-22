import ReclaimButton from './components/ReclaimButton';
import { StarknetProvider } from './components/StarknetProvider';
import InteractWithSmartContract from './components/InteractWithSmartContract';
import Navbar from './components/UI/Navbar';
import { Boxes } from './components/UI/Background';
import { cn } from './utils/background';

function App() {
  return (
    <div className="h-full text-black min-h-screen relative w-full overflow-hidden bg-slate-500 flex flex-col items-center justify-center rounded-lg font-noto-sans p-8">
      <Boxes />
      <StarknetProvider>
        <div className="max-w-screen-lg absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <div className={cn('text-xl relative z-20 gap-y-4')}>
          <Navbar />
          <InteractWithSmartContract />
          <ReclaimButton />
        </div>
      </StarknetProvider>
    </div>
  );
}

export default App;
