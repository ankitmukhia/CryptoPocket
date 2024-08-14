import { Router, Response, Request } from "express";
import { validateMnemonic } from "bip39";
import { getKey } from "../lib/utils"
const routes = Router();

interface MnemonicProps {
	mnemonicPhrase: string;
}

routes.post('/create-wallet', (req: Request, res: Response) => {
	const { mnemonicPhrase } = req.body as MnemonicProps;

	if (!mnemonicPhrase && !validateMnemonic(mnemonicPhrase)) {
		res.status(401).json({
			message: "Invalid Mnemonic Phrase."
		})
		return;
	}

	const walletKey = getKey(mnemonicPhrase)

	res.status(200).json({
		key: walletKey
	})
})

export default routes;
