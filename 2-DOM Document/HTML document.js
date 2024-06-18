const documentObject = document;
console.log(documentObject);

document.tittle = "How Tittle";
document.getElementById("mainHeading").textContent = "Greating, Document";

const newParagraph = document.createElement("p");
newParagraph.textContent = "A new paragraph has been created";
document.body.appendChild(newParagraph);

const firstParagraph = document.querySelector("p");
firstParagraph.style.color = "blue";

document.getElementById("mainHeading").addEventListener("click", () => {
  alert("Heading created");
});
