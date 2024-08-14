import nacl from "tweetnacl";
import { mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

export const getKey = (mnemonic: string) => {
	const seed = mnemonicToSeedSync(mnemonic);
	const index = Math.floor(Math.random() * 1000); // Random index for derivation path
	const path = `m/44'/501'/${index}'/0'`; // This is the derivation path
	const derivedSeed = derivePath(path, seed.toString("hex")).key;
	const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
	const key = Keypair.fromSecretKey(secret).publicKey.toBase58()
	return key;
}
