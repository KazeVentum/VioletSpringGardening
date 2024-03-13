document.getElementById("btnRegister").addEventListener("submit", async function(event){
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los valores de los campos de entrada
    var userName = document.getElementById("adminUser").value;
    var password = document.getElementById("passwordUser").value;

    // Crear un objeto con los datos del formulario
    var formData = {
        username: userName,
        password: password
    };

    // Configurar la solicitud POST
    await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        window.location.reload();
        alert("Successful Register")
        // Aquí puedes realizar cualquier acción adicional después de enviar los datos
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

