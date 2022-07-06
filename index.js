const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
  let date = new Date();
  let dHours = date.getHours();
  let dMinutes = date.getMinutes();
  let dSeconds = date.getSeconds();

  hour.innerHTML = `${formatTime(dHours)}`;
  min.innerHTML = `${formatTime(dMinutes)}`;
  sec.innerHTML = `${formatTime(dSeconds)}`;
}, 1000);

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
