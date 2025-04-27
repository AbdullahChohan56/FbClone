function initializeScript() {
  const passwordField = document.getElementById("password_field");

  // Optional: Eye icon functionality
  const eyeIcon = document.createElement("i");
  eyeIcon.className = "far fa-eye-slash";
  eyeIcon.style.cursor = "pointer";
  eyeIcon.style.marginLeft = "-30px";
  passwordField.parentNode.insertBefore(eyeIcon, passwordField.nextSibling);

  eyeIcon.addEventListener("click", function () {
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    eyeIcon.className =
      type === "password" ? "far fa-eye-slash" : "far fa-eye";
  });
}

initializeScript();
