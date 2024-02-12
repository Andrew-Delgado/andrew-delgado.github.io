function changeBackgroundColor() {
  const currentTime = new Date();
  const hours = currentTime.getHours();

  const dayBackgroundColor = "#B38C00"
  const dayTextColor = "#000000"

  const nightBackgroundColor = "#343540"
  const nightTextColor = "#B38C00"

  if (hours < 6 || hours > 14) {
    document.documentElement.style.setProperty("--background-color", nightBackgroundColor)
    document.documentElement.style.setProperty("--font-color", nightTextColor)
  } else {
    document.documentElement.style.setProperty("--background-color", dayBackgroundColor)
    document.documentElement.style.setProperty("--font-color", dayTextColor)
  }
}

function italicCurrentPage() {
  const currentPageTitle = document.title
  const id = document.getElementById(currentPageTitle.concat(' link'));
  id.style.fontStyle = "italic"
}

// This is not complete. 
// I think tapping the Header would be an easy way to test color changes.
function forceColorChange() {
  // Select the header element
  const header = document.getElementById('header');

  // Initialize tap counter
  let tapCount = 0;

  // Add event listener for 'click' event
  header.addEventListener('click', () => {
    tapCount++; // Increment tap count
    console.log(`Tapped ${tapCount} times.`);
  });
}

function fontAndColorUpdates() {
  changeBackgroundColor()
  italicCurrentPage()
}

document.addEventListener('DOMContentLoaded', fontAndColorUpdates);
