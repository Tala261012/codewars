let date = new Date("2012-02-20T03:12+02:00");
console.log(date);
let date2 = new Date(2012, 0, 8);

function getDateAgo(now, days) {
  let day = now.getTime() - days * 24 * 60 * 60 * 1000;
  return new Date(day);
}

console.log(getDateAgo(date, 100));
