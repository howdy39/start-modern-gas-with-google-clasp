// eslint-disable-next-line no-unused-vars
function getDayFormat(date) {
  if (date === undefined) {
    date = new Date();
  }
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return year + '-' + month + '-' + day;
}
