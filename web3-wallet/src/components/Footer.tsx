import Button from "./ui/Button"
/* import { toast } from "sonner" */
import { getMnemonic, getWallet } from "../api/index";
import { useStore } from "../store";

const Footer = ({ text, setStep, step }: {
  text: string,
  setStep: (step: number) => void,
  step: number,
}) => {
  const mnemonicPhrase = useStore((state) => state.mnemonicKeys)
  const updateMnemonic = useStore((state) => state.addMnemonicKeys)
  const updateWalletKeys = useStore((state) => state.addWalletKeys)

  return <>
    <Button text={text} onClick={async () => {
      if (step === 1) {
        const res = await getMnemonic();
        updateMnemonic(res)
      }

      if (step === 2) {
        const res = await getWallet(mnemonicPhrase)
        updateWalletKeys(res)
      }
      setStep(step > 3 ? step : step + 1)
    }} />
  </>
}

export default Footer;
