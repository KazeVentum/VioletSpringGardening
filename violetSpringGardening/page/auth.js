document.addEventListener("DOMContentLoaded", function () {
  // Obtener la URL actual
  const currentUrl = window.location.pathname;

  if (currentUrl.includes("login.html")) {
    // Código específico para la página de login
    // Código específico para la página de login
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
              "Error al obtener el token de login. Código de estado HTTP: " +
                response.status
            );
          }
          return response.text(); // Leer la respuesta como texto
        })
        .then((token) => {
          sessionStorage.setItem("jwtToken", token.trim()); // Guardar el token JWT en sessionStorage
          alert("Token generado correctamente");
          window.location.href = "test.html";
        })
        .catch((error) => {
          console.error("Error al obtener el token de login:", error);
          loginUserNameInput.value = ''; 
          loginPasswordInput.value = ''; 
        });
    });
  } else if (currentUrl.includes("register.html")) {
    // Código específico para la página de registro
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
        })
        .catch((error) => {
          console.error("Error en el registro:", error);
        });
    });
  }
});
