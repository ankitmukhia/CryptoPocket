import Card from "./ui/Card";
import { useStore } from "../store";

const Hero = () => {
  //@ts-ignore
  const mnemonic = useStore((state) => state.mnemonicKeys)

  return <div className="grid grid-cols-3 gap-2">
    <Card />
    <div className="flex flex-row justify-center items-center border border-[#A5A5A540] px-2 rounded-md col-span-2">
      <p className="text-white text-sm">{mnemonic ? mnemonic : "Create Mnemonic"}</p>
    </div>
  </div>
}

export default Hero;
