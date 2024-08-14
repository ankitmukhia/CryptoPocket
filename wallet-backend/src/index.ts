import express from "express";
import cors from "cors";
import GenerateMnemonic from "./routes/generate-mnemonic"
import CreateWallet from "./routes/create-wallet"
const app = express();

app.use(express.json())
app.use(cors({
	origin: "http://localhost:5173"
}))
const PORT = 3000;

app.use("/api", GenerateMnemonic)
app.use("/api", CreateWallet)

app.listen(PORT, () => {
	console.log(`PORT is running at http://localhost:${PORT}`)
})
