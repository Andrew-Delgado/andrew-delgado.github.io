function changeBackgroundColor() {
  let currentTime = new Date();
  let hours = currentTime.getHours();

  if (hours > 6 && hours < 14) {
    currentShade = "#B38C00"; // day
    currentFontColor = "#343540"; // day
  } else {
    currentShade = "#343540"; // night
    currentFontColor = "#B38C00"; // night
  }
  document.body.style.backgroundColor = currentShade;
  var all = document.getElementsByTagName("*");

  for (var i = 0, max = all.length; i < max; i++) {
    all[i].style.color = currentFontColor;
  }
}

window.onload = changeBackgroundColor;
