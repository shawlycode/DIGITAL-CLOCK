const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minute");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  //condtional statement to add 0 b4 the hour
  h = h < 10 ? "0" + h : h;
  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondsEl.innerText = s;
  setTimeout(() => {
    updateClock();
  }, 1000);
}
updateClock();
