const clickMeButton = document.getElementById("clickMe");

clickMeButton.addEventListener("click", function () {
  alert("You clicked the button");
});

document.addEventListener("keypress", function () {
  console.log("key pressed", event.key);
});

clickMeButton.addEventListener("mouseover", function () {
  console.log("mouse over button");
});

clickMeButton.addEventListener("mouseout", function () {
  console.log("mouse out button");
});
