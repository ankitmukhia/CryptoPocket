import { Router, Request, Response } from "express";
import { generateMnemonic } from "bip39";
const routes = Router();

routes.get("/generate-mnemonic", (req: Request, res: Response) => {
	const mnemonic = generateMnemonic();

	res.status(200).json({
		message: mnemonic
	})
})

export default routes;
