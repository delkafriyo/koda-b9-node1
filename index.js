import getConvertionDate from "./src/minitask1.js";
import dateConvert from "./src/minitask2.js";
import { createInterface } from "node:readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
(async () => {
  try {
    const a = await rl.question("Masukkan tanggal : \n");
    getConvertionDate(a);
    dateConvert(a);
    rl.close();
  } catch (error) {
    console.log(error);
  } finally {
    rl.close();
  }
})();

//Minitask 3 Eslint
// 1. Ini adalah contoh dari penggunaan stylistic Line Command Position
// 1 + 1; // invalid comment

// ini contoh yang benar
// 1 + 1;

// 2. Stylistic One Variable Declaration per Line
// dibawah ini contoh salah
// var a, b;

// ini penulisan yang benar
// var c = 1,
//   d = 2;

// Stylistic Function Parent Newline
// function addNum(num1, num2) {
//   return num1 + num2;
// }

// Stylistic implicit arrow linebreak
// let e = (cb, ce) => cb * ce;

// Stylistic Comma Spacing
// addNum(c, d);

// e(c, d);
