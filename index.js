import getDate from "./src/date_convertion.js";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

// import { createInterface } from "node:readline";

const rl = readline.createInterface({ input, output });
const a = await rl.question("Masukkan tanggal : \n");
getDate(a);
rl.close();
