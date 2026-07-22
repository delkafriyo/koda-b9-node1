import getConvertionDate from "./src/minitask1.js";
import dateConvert from "./src/minitask2.js";
import { createInterface } from "node:readline/promises";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
(async () => {
  try {
    const newDate = await rl.question("Masukkan tanggal : \n");
    getConvertionDate(newDate);
    dateConvert(newDate);
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
//Dibawah ini contoh yang tidak sesuai dengan aturan yang kita buat
//function multyNum(
// num1, num2) {
// return num1 * num2}

//Dibawah ini contoh yang sudah sesuai aturan
// function addNum(num1, num2) {
//   return num1 + num2;
// }

// Stylistic implicit arrow linebreak
//Dibawah ini contoh tidak sesuai dengan aturan yang kita buat
// let f = (num1, num2) =>
// num1 * num2

//Dibawah ini contoh yang sudah mengikuti aturan
// let e = (cb, ce) => cb * ce;

// Stylistic Comma Spacing
// dibawah ini sudah sesuai dengan aturan yang kita buat
// addNum(c, d);

// e(c, d);
