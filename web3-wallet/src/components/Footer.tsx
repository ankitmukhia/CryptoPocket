import Button from "./ui/Button"
import { toast } from "sonner"
import { getMnemonic, getWallet } from "../api/index";
import { useStore } from "../store";

const Footer = () => {
  const mnemonicPhrase = useStore((state) => state.mnemonicKeys)
  const updateMnemonic = useStore((state) => state.addMnemonicKeys)
  const updateWalletKeys = useStore((state) => state.addWalletKeys)

  return <>
    <Button text="Generate Mnemonic" onClick={async () => {
      const res = await getMnemonic();
      updateMnemonic(res)
    }} />
    <Button text="Create Wallet"
      onClick={async () => {
        if (!mnemonicPhrase) {
          toast.error("Generate Mnemonic first.")
          return;
        }
        const res = await getWallet(mnemonicPhrase)
        updateWalletKeys(res)
      }}
    />
  </>
}

export default Footer;
