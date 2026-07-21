import moment from "moment";

function getConvertionDate(date) {
  const format = moment(date, "DD-MM-YYYY", true).format("DD/MM/YYYY");

  if (format !== "Invalid date") {
    console.log(format);
  } else {
    throw new Error("Format tanggal salah");
  }
}

export default getConvertionDate;
