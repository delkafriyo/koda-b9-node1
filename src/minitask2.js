function dateConvert(date) {
  const getDate = date.split("-");
  const getStrip = date.split("");
  if (
    !Number(getDate[0]) ||
    Number(getDate[0]) > 31 ||
    !Number(getDate[1]) ||
    Number(getDate[1]) > 12 ||
    !Number(getDate[2])
  ) {
    throw new Error("Data Invalid");
  }

  if (getStrip[2] != "-" || getStrip[5] != "-") {
    throw new Error("Data Invalid");
  } else {
    getStrip[2] = "/";
    getStrip[5] = "/";
  }

  let result = getStrip.join("");
  return console.log(result);
}

export default dateConvert;
