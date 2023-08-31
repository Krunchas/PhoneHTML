setInterval(() => {
  let den
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  const time = hh + ":" + mm;
  if (date.getDay() === 1) {
    den = "po";
  }
  else if (date.getDay() === 2) {
    den = "út";
  }
  else if (date.getDay() === 3) {
    den = "st";
  }
  else if (date.getDay() === 4) {
    den = "čt";
  }
  else if (date.getDay() === 5) {
    den = "pá";
  }
  else if (date.getDay() === 6) {
    den = "so";
  }
  else {
    den = "ne";
  }
  const dateText = den + " " + date.getDate() + ". " + (Intl.DateTimeFormat('cs', { month: 'long' }).format(date));
  document.querySelector(".time").innerHTML = time;
  document.querySelector(".date").innerHTML = dateText;
}, 1000);