function errors(er) {
  var errorHtml =
    `<div class="alert alert-primary" role="alert">` + er.join("<br>");
  +`</div>`;
  return errorHtml;
}
var loginBtn = document.querySelector("#loginBtn");
var error = document.querySelector("#error");
loginBtn.addEventListener("click", function (e) {
  var username = document.querySelector("#username");
  var password = document.querySelector("#password");
  var error = document.querySelector("#error");
  var usernameText = username.value.trim();
  var passwordText = password.value.trim();
  error.innerHTML = "";
  var errorsList = [];
  if (usernameText.length <= 0) {
    errorsList.push("Please Fill Username Field");
  } else if (usernameText.length < 6) {
    errorsList.push("Username should be more than 6");
  }
  if (passwordText.length <= 0) {
    errorsList.push("Please Fill password Field");
  } else if (usernameText.length < 6) {
    errorsList.push("Password should be more than 6");
  }
  if (errorsList.length > 0) {
    e.preventDefault();
    var errorHtml = errors(errorsList);
    error.insertAdjacentHTML("beforebegin", errorHtml);
  }
});
