const heading = document.getElementById("mainheading");
heading.textContent = "Greetings, HTML DOM Method";

const paragraphs = document.getElementsByClassName("paragraph");
for (const paragraph of paragraphs) {
  paragraph.computedStyleMap.color = "green";
}

heading.addEventListener("click", () => {
  alert("Heading clicked");
});
