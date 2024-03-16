document.addEventListener("DOMContentLoaded", function () {
  // Get the current URL
  const currentUrl = window.location.pathname;

  if (currentUrl.includes("login.html")) {

    const redirect = document.getElementById("reDirectRegister");

    redirect.addEventListener("click", function () {
      window.location.href = "register.html";
    })

    // Specific code for the login page
    const loginForm = document.getElementById("formUserToken");
    const loginUserNameInput = document.getElementById("adminToken");
    const loginPasswordInput = document.getElementById("passwordToken");

    loginForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      const userName = loginUserNameInput.value;
      const password = loginPasswordInput.value;

      const loginFormData = new FormData();
      loginFormData.append("username", userName);
      loginFormData.append("password", password);

      await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `username=${encodeURIComponent(
          userName
        )}&password=${encodeURIComponent(password)}`,
      })
        .then((response) => {
          if (!response.ok) {
            alert("Incorrect username or password");
            throw new Error(
              "Error obtaining login token. HTTP status code:" +
                response.status
            );
          }
          return response.text(); 
        })
        .then((token) => {
          sessionStorage.setItem("jwtToken", token.trim()); //Save the JWT token in sessionStorage
          alert("Successfully generated token");
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error("Error obtaining login token:", error);
          loginUserNameInput.value = ''; 
          loginPasswordInput.value = ''; 
        });
    });
  } else if (currentUrl.includes("register.html")) {

  // Specific code for the registration page
    const registerButton = document.getElementById("btnRegister");
    const registerUserNameInput = document.getElementById("adminUser");
    const registerPasswordInput = document.getElementById("passwordUser");

    registerButton.addEventListener("click", async function (event) {
      event.preventDefault();

      const userName = registerUserNameInput.value;
      const password = registerPasswordInput.value;

      const registerFormData = {
        username: userName,
        password: password,
      };

      await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerFormData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("Successful Register");
          window.location.href = "login.html";
        })
        .catch((error) => {
          console.error("Registry error:", error);
        });
    });
  }
});
