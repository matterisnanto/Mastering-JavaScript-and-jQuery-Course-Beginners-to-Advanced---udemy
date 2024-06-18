const myForm = document.getElementById("myForm");
const usernameinput = document.getElementById("usernamee");
const passwordinput = document.getElementById("passwordd");
const submitButton = document.querySelector("button");

console.log("from element: ", myForm);
console.log("username input element: ", usernameinput);
console.log("password input element: ", passwordinput);
console.log("submit button element: ", submitButton);

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const usernamevalue = usernameinput.Value;
  const passwordvalue = passwordvalue.Value;

  console.log("username: ", usernamevalue);
  console.log("password: ", passwordvalue);
});
