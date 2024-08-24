import { IoMdArrowBack } from 'react-icons/io'
import { useStore } from '../store'

export const CryptoDetails = ({ step, setStep, currentCurrencyDetails }: {
  step: number;
  setStep: (step: number) => void
  currentCurrencyDetails: string
}) => {
  const walletKey = useStore((state) => state.walletKeys);
  const handleBack = () => {
    setStep(step - 1)
  }

  return <div className="flex flex-col">
    <button className="mb-10" onClick={handleBack}>
      <IoMdArrowBack color="white" size={20} className="border rounded-full" />
    </button>
    <p className="text-white text-3xl mb-10 text-center">$0.00</p>
    <div className="flex flex-row items-center space-x-4">
      <div className="flex-1">
        <label className="text-gray-400">Public Key</label>
        <div className="flex flex-row justify-between border border-[#A5A5A540] rounded-md px-4 py-2">
          {walletKey.map((cury, _i) => {
            console.log(cury)
            return (
              <div key={_i}>
                {currentCurrencyDetails === 'Solana' &&
                  <p className="text-white">{cury.solKey}</p>
                }

                {currentCurrencyDetails === 'Ethereum' &&
                  <p className="text-white">{cury.ethKey}</p>
                }
              </div>
            )
          })}
        </div>
      </div>
    </div>
  </div>
}
