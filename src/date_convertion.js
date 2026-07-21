import moment from "moment";

function getDate(date) {
  const format = moment(date, "DD-MM-YYYY", true).format("DD/MM/YYYY");

  if (format !== "Invalid date") {
    console.log(format);
  } else {
    console.log("format tangal salah");
  }
}

export default getDate;
