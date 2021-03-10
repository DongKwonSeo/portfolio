function getCurrentDate() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  return new Date(
    Date.UTC(year, month, today, hours, minutes, seconds, milliseconds)
  );
}

// function getCurrentDate(value) {
//   const date = new Date();
//   const year = date.getFullYear();
//   const month = date.getMonth();
//   const today = date.getDate();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const seconds = date.getSeconds();
//   const milliseconds = date.getMilliseconds();

//   if (value == "today") {
//     return new Date(Date.UTC(year, month, today));
//   } else if (value == "Month") {
//     return new Date(Date.UTC(year, month));
//   }
//   return new Date(
//     Date.UTC(year, month, today, hours, minutes, seconds, milliseconds)
//   );
// }

module.exports = getCurrentDate;
