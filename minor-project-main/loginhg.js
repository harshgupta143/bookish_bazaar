let emailEl = document.getElementById("emailhg");
let passwordEl = document.getElementById("passwordhg");
let signEl=document.getElementById("signin");

signEl.addEventListener("keydown", function(event) {
  let emailText = emailEl.value;
  let passwordText=passwordEl.value;
  if (emailText === "harshgupta@gmail.com" && passwordText="harshgupta") {
    localStorage.setItem("email",emailEl.value);
    localStorage.getItem("password",passwordEl.value);
  }
});