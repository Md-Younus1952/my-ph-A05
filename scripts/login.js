console.log("login-functonality");

document.getElementById("login-btn").addEventListener("click", function () {
  const username = document.getElementById("user-name");
  const userNameValue = username.value;
  console.log(userNameValue);

  const password = document.getElementById("password-check");
  const passwordValue = password.value;
  console.log(passwordValue);

  if (userNameValue == "admin" && passwordValue == "admin123") {
    window.location.assign("./home.html");
  } else {
    document.getElementById("error").innerText = "Invalid Username or Password";
  }
});
