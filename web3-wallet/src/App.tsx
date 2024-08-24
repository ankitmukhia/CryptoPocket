import { useState, memo } from 'react'
import './App.css'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Step } from './components/Setp'
import Keysnippet from './components/Keysnippet'
import { CryptoDetails } from './components/CryptoDetails'
import { Send } from './components/Send'

enum ButtonType {
  CreateWallet = "Create Wallet",
  Continue = "Continue",
}

function App() {
  const [step, setStep] = useState<number>(1);
  const [currentCurrencyDetails, setDetails] = useState<string>("");

  return (
    <div className="flex flex-col h-screen bg-black items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-full flex-1 items-center rounded-lg min-h-96 border border-gray-700/50 bg-white px-6 pb-4 pt-4 shadow-md dark:bg-zinc-950">
          <div className="flex flex-col h-full justify-center items-center">
            {step === 1 && (
              <div>
                <h1
                  className="text-5xl text-white text-center font-semibold font-serif">
                  Crypto Pocket
                </h1>

                <p
                  className="text-xl mt-4 text-white text-center font-semibold font-serif">
                  To get started, create a new wallet.
                </p>
              </div>
            )}

            {step === 2 && (
              <Step step={2} currentStep={step}>
                <Hero />
              </Step>
            )}

            {step === 3 && (
              <Step step={3} currentStep={step}>
                <Keysnippet step={step} setStep={setStep} setDetails={setDetails} />
              </Step>
            )}

            {step === 4 && (
              <Step step={4} currentStep={step}>
                <CryptoDetails step={step} setStep={setStep} currentCurrencyDetails={currentCurrencyDetails} />
              </Step>
            )}


            {step === 5 && (
              <Step step={5} currentStep={step}>
                <Send />
              </Step>
            )}
          </div>

        </div>
        <div className="w-full flex space-x-2 justify-between">
          {step === 1 && (
            <Footer step={step} setStep={setStep} text={ButtonType.CreateWallet} />
          )}

          {step === 2 && (
            <Footer step={step} setStep={setStep} text={ButtonType.Continue} />
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(App)
