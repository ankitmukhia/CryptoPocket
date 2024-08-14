import './App.css'
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Keysnippet from "./components/Keysnippet";

function App() {

  return (
    <div className="flex flex-col h-screen bg-black items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-full flex-1 rounded-lg border border-gray-700/50 bg-white px-6 pb-4 pt-4 shadow-md dark:bg-zinc-950">
          <h1 className="text-3xl text-white font-semibold font-serif">Create your Cryptocurrency Wallet</h1>
          <div className="mt-4 space-y-4">
            <Hero />
            <Keysnippet />
          </div>
        </div>
        <div className="w-full flex space-x-2 justify-between">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
