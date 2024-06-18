const clickMeButton = document.getElementById("clickMe");

clickMeButton.addEventListener("click", function () {
  alert("You clicked the button");
});

const dynamiclist = document.getElementById("dynamiclist");

dynamiclist.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("Clicked on list item : ", event.target.textContent);
  }
});
