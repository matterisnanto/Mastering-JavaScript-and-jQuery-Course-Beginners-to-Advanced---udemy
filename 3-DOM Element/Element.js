const heading = document.getElementById("mainHeading");
heading.textContent = "greeting, Elements";

const paragraphs = document.getElementsByTagName("p");
for (const paragraph of paragraphs) {
  paragraph.style.color = "blue";
}

const introParagraph = document.getElementsByClassName("intro-paragraph")[0];
introParagraph.textContent = "discovere the magic of HTML elements.";

const firstParagraph = document.querySelector("p");
firstParagraph.style.fontSize = "10px";

heading.setAttribute("class", "main-tittle");

const newParagraph = document.createElement("p");
newParagraph.textContent = "A new paragraph has been created";
document.body.appendChild(newParagraph);
