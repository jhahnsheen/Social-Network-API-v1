// setup timeSet getter function
// most of this was pulled from online
module.exports = (timestamp) => {
  // create month object that translates the timestamp month into a string month
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };
  // set a date object using the timestamp passed in from Mongoose
  const date = new Date(timestamp);
  // get the date
  const d = date.getDate();
  // get the string month
  const m = months[date.getMonth()];
  // get the year
  const y = date.getFullYear();
  // need to add a zero if the minute is less than 10
  const min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  // hours needs to be formatted from 0-23 to 12 - 11 - 12 format
  let h = date.getHours();
  let ap = 'am';
  if (h = 0 ) {
    h = 12;
  } else if (h > 12) {
    h -= 12;
    ap = 'pm'
  }

  const format = `${m} ${d}, ${y} at ${h}:${min}`;
  return format;
};