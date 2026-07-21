import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  {
    files: ["**/*.js"],
    plugins: { js, "@stylistic": stylistic },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      //Stylistic line comment position digunakan untuk menentukan posisi line komen yang akan digunakan dalam project.
      "@stylistic/line-comment-position": ["error", { position: "above" }],

      //Stylistic One Variable Declaration per Line dibawah ini digunakan agar setiap baris hanya dapat mendeklarasi satu variabel
      "@stylistic/one-var-declaration-per-line": ["error", "always"],

      // Stylistic Function Parent Newline ini digunakan untuk mengatur line baru pada fungsi induk. Dimana saat function dibuat maka akan masuk ke line baru. Disini saya membuat never karena saya ingin saat function dibuat, parameter nya tetap dibuat disamping function
      "@stylistic/function-paren-newline": ["error", "never"],

      //Stylistic implicit arrow linebreak digunakan untuk mengatur posisi penulisan ekspresi setelah arrow function dibuat. Ekspresi selanjutnya dapat dibuat di bawah dan disebelah. disini kita menggunakan beside.
      "@stylistic/implicit-arrow-linebreak": ["error", "beside"],

      //Stylistic Comma Spacing digunakan untuk mengatur spasi sebelum dan setelah coma(,).
      "@stylistic/comma-spacing": ["error", { before: false, after: true }],
    },
  },
]);
