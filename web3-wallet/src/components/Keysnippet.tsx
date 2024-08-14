import { IoMdCopy } from "react-icons/io"
import { useStore } from "../store"

const Keysnippet = () => {
  const walletKey = useStore((state) => state.walletKeys)
  const clipToClipBoard = (content: string) => {

  }

  return <div className="space-y-2">
    {walletKey.map((key) => (
      <div key={key}>
        <label className="text-gray-400">Public Key</label>
        <div className="flex flex-row justify-between border border-[#A5A5A540] rounded-md px-4 py-2">
          <p className="text-white">{key}</p>S
          <button onClick={() => { }}>
            <IoMdCopy color="white" size={20} />
          </button>

        </div>
      </div>
    ))}
  </div>
}

export default Keysnippet;
