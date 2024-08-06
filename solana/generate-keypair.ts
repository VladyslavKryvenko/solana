import "dotenv/config";
import {Keypair} from "@solana/web3.js";

const asArray = Uint8Array.from(JSON.parse(process.env.SECRET_KEY));
const  keypair = Keypair.fromSecretKey(asArray);

console.log(keypair.publicKey.toBase58());
console.log(keypair.secretKey);
