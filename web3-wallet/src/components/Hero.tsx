import Card from "./ui/Card";
import { useStore } from "../store";

const Hero = () => {
  const mnemonic = useStore((state) => state.mnemonicKeys)
  const words = mnemonic.split(" ");

  return <div className="grid grid-cols-3 gap-2">
    <Card />
    <div className="grid grid-cols-3 hover:bg-gray-800/50 cursor-pointer gap-2 border border-[#A5A5A540] px-2 rounded-md col-span-2">
      {words.map((word, index) => (
        <div key={index} className="flex justify-start items-center p-1 space-x-2">
          {word && (
            <div className="text-gray-400 text-sm">{index + 1}.</div>
          )}
          <p className="text-white text-sm">{word ? word : "Create Mnemonic"}</p>
        </div>
      ))}
    </div>
  </div>
}

export default Hero;
