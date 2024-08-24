import { IconType } from 'react-icons'
import { CiBitcoin } from 'react-icons/ci'
import { IoIosSend } from 'react-icons/io'

const currencySupported: {
  id: number;
  icon: IconType,
  currency: string
}[] = [
    { id: 1, icon: CiBitcoin, currency: "Solana" },
    { id: 2, icon: CiBitcoin, currency: "Ethereum" },
  ]

const Keysnippet = ({ step, setStep, setDetails }: {
  step: number;
  setStep: (step: number) => void;
  setDetails: (currentDetails: string) => void;
}) => {
  const handleOpenDetails = (currency: string) => {
    setStep(step + 1)
    setDetails(currency)
  }

  const handleSend = () => {
    setStep(5)
  }

  return <div className="space-y-2">
    <p className="text-4xl text-white mb-10 text-center">$0.00</p>
    <button onClick={handleSend} className="rounded-xl px-4 py-3 bg-gray-400/10">
      <IoIosSend color="white" size={24} />
      <p className="text-white text-sm">
        Send
      </p>
    </button>
    {currencySupported.map((icn, _i) => (
      <div key={_i} onClick={() => handleOpenDetails(icn.currency)} className="flex flex-row items-center space-x-4 cursor-pointer">
        <div className="flex-1">
          <div className="flex flex-row justify-between hover:bg-gray-700/20 bg-gray-400/10 rounded-xl px-4 py-2">
            <div className="flex w-60 h-10 gap-3 items-center">
              <icn.icon color="white" size={30} />
              <p className="text-white space-x-6">
                {icn.currency}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
}

export default Keysnippet;



/* {walletKey.map((key) => (
  <div className="flex flex-row items-center space-x-4">
    <div className="flex-1">
      <label className="text-gray-400">Public Key</label>
      <div className="flex flex-row justify-between border border-[#A5A5A540] rounded-md px-4 py-2">
        <button onClick={() => { }}>
          <IoMdCopy color="white" size={20} />
        </button>

      </div>
    </div>
  </div>
))} */

/*  <p className="text-white">{key.length > 30 ? key.slice(0, 30) + "..." : key}</p>S */
