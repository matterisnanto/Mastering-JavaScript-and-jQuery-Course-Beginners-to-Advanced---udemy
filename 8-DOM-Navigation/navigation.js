const container = document.getElementById("container");
console.log("container elemen:", container);

const listItems = document.getElementsByTagName("li");
console.log("listItems:", listItems);

const contentDivs = document.getElementsByClassName("content");
console.log("contentDivs:", contentDivs);

const welcomeParagraph = document.querySelector("#container .content");
console.log("welcomeParagraph:", welcomeParagraph);

const containerDivs = document.getElementsByClassName("container");
const list = containerDivs.getElementsByTagName("ul")[0];
const secondLisrItem = list.getElementsByTagName("li")[1];
console.log("secondLisrItem", secondLisrItem.textContent);
