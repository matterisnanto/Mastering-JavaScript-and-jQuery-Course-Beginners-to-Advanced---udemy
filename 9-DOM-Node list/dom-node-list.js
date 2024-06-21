const listItem = document.querySelectorAll("#mylist li");
console.log("list item node list: ", listItem);

listItem.forEach((item, index) => {
  console.log(`item ${index + 1} : ${item.textContent}`);
});

listItem.forEach((item) => {
  item.style.color = "red";
});

listItem.forEach((item, index) => {
  item.addEventListener("click", function () {
    alert(`item ${index + 1} clicked`);
  });
});
