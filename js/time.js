const time = document.querySelector(".status-ber__time");

function getTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, 0);
  const mins = String(now.getMinutes()).padStart(2, 0);
  time.innerText = `${hours}:${mins}`;
}

getTime();
setInterval(getTime, 1000);
