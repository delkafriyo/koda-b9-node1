(async function () {
  try {
    const rl = readline.createInterface({ input, output });
    const a = await rl.question("Masukkan tanggal : \n");
    getDate(a);
    rl.close();
  } catch (error) {
    console.log("error");
  }
});
