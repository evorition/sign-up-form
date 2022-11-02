const passwd = document.querySelector("#passwd")
const confirmPasswd = document.querySelector("#confirm-passwd")

passwd.addEventListener("keyup", checkPasswords);
confirmPasswd.addEventListener("keyup", checkPasswords);

function checkPasswords(event) {
  if (passwd.value === confirmPasswd.value) {
    passwd.setCustomValidity("");
    confirmPasswd.setCustomValidity("");
  } else {
    passwd.setCustomValidity("Passwords don't match");
    confirmPasswd.setCustomValidity("Passwords don't match");
    event.target.reportValidity();
  }
}
