document.getElementById("login-btn").addEventListener("click", function () {
  const UserNameCeck = document.getElementById("user-name");
  const userNameValue = UserNameCeck.value;
  console.log(userNameValue);
  const passwordCheck = document.getElementById("password-check");
  const passwordValue = passwordCheck.value;
  console.log(passwordValue);

  if (userNameValue === "admin" && passwordValue === "admin123") {
    alert("Login successful!");
    window.location.assign("home.html");
    // Redirect to another page or perform other actions
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
