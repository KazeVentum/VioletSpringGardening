document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del formulario
    const form = document.getElementById('formUserToken');
    const userNameInput = document.getElementById('adminToken');
    const passwordInput = document.getElementById('passwordToken');

    // Manejar el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente

        // Obtener los valores de los campos de entrada
        const userName = userNameInput.value;
        const password = passwordInput.value;

        // Datos del formulario
        const formData = new FormData();
        formData.append('newUser', userName);
        formData.append('encryptedPass', password);

        // Realizar una solicitud HTTP POST para obtener el token
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `newUser=${encodeURIComponent(userName)}&encryptedPass=${encodeURIComponent(password)}`
            })
            .then(response => response.json()) // Convierte la respuesta a formato JSON
            .then(data => {
                const token = data.token;
                localStorage.setItem('jwtToken', token);
                console.log('Token obtenido:', token);
            })
            .catch(error => {
                console.error('Error al obtener el token:', error);
                // Mostrar un mensaje de error al usuario, por ejemplo
            });
    });
});
