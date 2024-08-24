import { Router, Response, Request } from "express";
import { validateMnemonic } from "bip39";
import { getBitKey, getEthKey } from "../lib/utils"
const routes = Router();

interface MnemonicProps {
	mnemonicPhrase: string;
}

routes.post('/create-wallet', (req: Request, res: Response) => {
	const { mnemonicPhrase } = req.body as MnemonicProps;
	console.log("mnemonic  phrease", mnemonicPhrase)

	if (!mnemonicPhrase && !validateMnemonic(mnemonicPhrase)) {
		res.status(401).json({
			message: "Invalid Mnemonic Phrase."
		})
		return;
	}

	const solKey = getBitKey(mnemonicPhrase)
	console.log("sol :", solKey)
	const { address } = getEthKey(mnemonicPhrase)
	console.log("eth :", address)


	res.status(200).json({
		solKey,
		ethKey: address
	})
})

export default routes;
