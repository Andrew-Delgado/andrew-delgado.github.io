function changeBackgroundColor() {
  let currentTime = new Date();
  let hours = currentTime.getHours();

  let currentShade = "#B38C00"; // day
  let currentFontColor = "#000000"; // day
  
  if (hours < 6 || hours > 14) {
    currentShade = "#343540"; // night
    currentFontColor = "#B38C00"; // night
  }

  document.body.style.backgroundColor = currentShade;
  const elementsToUpdate = ["a", "p", "header"]
  let all = []

  elementsToUpdate.forEach((e) => {
    all = [...all, ...document.getElementsByTagName(e)]
  });

  for (let i = 0, max = all.length; i < max; i++) {
    all[i].style.color = currentFontColor;
  }
}

window.onload = changeBackgroundColor;
