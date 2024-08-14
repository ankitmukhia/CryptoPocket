import axios from "axios";

export const getMnemonic = async () => {
	try {
		const res = await axios.get("http://localhost:3000/api/generate-mnemonic");
		return res.data.message;
	} catch (error) {
		console.log(error)
	}
}

export const getWallet = async (mnemonicPhrase: string) => {
	try {
		const res = await axios.post("http://localhost:3000/api/create-wallet", {
			headers: {
				'Content-Type': "application/json",
			},
			mnemonicPhrase
		});
		console.log("data : ", res.data.key)
		return res.data.key;
	} catch (error) {
		console.log(error)
	}
}
