// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');
allDropdown.forEach(item=> {
	const a = item.parentElement.querySelector('a:first-child');
	a.addEventListener('click', function (e) {
		e.preventDefault();

		if(!this.classList.contains('active')) {
			allDropdown.forEach(i=> {
				const aLink = i.parentElement.querySelector('a:first-child');

				aLink.classList.remove('active');
				i.classList.remove('show');
			})
		}

		this.classList.toggle('active');
		item.classList.toggle('show');
	})
})
// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');
if(sidebar.classList.contains('hide')) {
	allSideDivider.forEach(item=> {
		item.textContent = '-'
	})
	allDropdown.forEach(item=> {
		const a = item.parentElement.querySelector('a:first-child');
		a.classList.remove('active');
		item.classList.remove('show');
	})
} else {
	allSideDivider.forEach(item=> {
		item.textContent = item.dataset.text;
	})
}
toggleSidebar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');

	if(sidebar.classList.contains('hide')) {
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})

		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
	} else {
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
sidebar.addEventListener('mouseleave', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = '-'
		})
	}
})
sidebar.addEventListener('mouseenter', function () {
	if(this.classList.contains('hide')) {
		allDropdown.forEach(item=> {
			const a = item.parentElement.querySelector('a:first-child');
			a.classList.remove('active');
			item.classList.remove('show');
		})
		allSideDivider.forEach(item=> {
			item.textContent = item.dataset.text;
		})
	}
})
// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');
imgProfile.addEventListener('click', function () {
	dropdownProfile.classList.toggle('show');
})
// MENU
const allMenu = document.querySelectorAll('main .content-data .head .menu');
allMenu.forEach(item=> {
	const icon = item.querySelector('.icon');
	const menuLink = item.querySelector('.menu-link');

	icon.addEventListener('click', function () {
		menuLink.classList.toggle('show');
	})
})
window.addEventListener('click', function (e) {
	if(e.target !== imgProfile) {
		if(e.target !== dropdownProfile) {
			if(dropdownProfile.classList.contains('show')) {
				dropdownProfile.classList.remove('show');
			}
		}
	}

	allMenu.forEach(item=> {
		const icon = item.querySelector('.icon');
		const menuLink = item.querySelector('.menu-link');

		if(e.target !== icon) {
			if(e.target !== menuLink) {
				if (menuLink.classList.contains('show')) {
					menuLink.classList.remove('show')
				}
			}
		}
	})
})

// PROGRESSBAR NO NECESARIO
const allProgress = document.querySelectorAll('main .card .progress');
allProgress.forEach(item=> {
	item.style.setProperty('--value', item.dataset.value)
})


// ENTITY CUSTOMERS QUERIES

// Función para agregar las tarjetas de cliente al contenedor
function addClientCards(responseData) {
    const clientCardsContainer = document.getElementById('showData');
    let html = '';

    // Iterar sobre los datos de la respuesta y generar el HTML de las tarjetas de cliente
    responseData.forEach(clientData => {
        const title = clientData[0];
        const name = clientData[1];

        // Generar el HTML para cada tarjeta de cliente
        html += `
            <div class="card">
                <div class="head">
                    <div>
                        <h2>${title}</h2>
                        <p>${name}</p>
                    </div>
                    <i class='bx bx-repeat icon'></i>
                </div>
                <div class="icoInfo">
                    <i class='bx bxs-user-pin bx-lg bx-tada-hover icon'></i>
                </div>
            </div>
        `;
    });

    // Agregar el HTML generado al contenedor
    clientCardsContainer.innerHTML = html;
}

// Función para realizar la solicitud y mostrar las tarjetas de cliente
function RepeatSales() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/customersWithSalesRep', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        // Llamar a la función para agregar las tarjetas de cliente con la respuesta del fetch
        addClientCards(data);
    })
    .catch(error => console.error('Error:', error));
}

// Agregar el evento click al botón
document.getElementById("customersWithSalesRep_btn").addEventListener("click", function() {
    // Cuando se hace clic en el botón, llamar a RepeatSales para obtener los datos y mostrar las tarjetas de cliente
    RepeatSales();
});



function PaidCustomers() {
	const token = sessionStorage.getItem('jwtToken'); 
	fetch('http://localhost:8080/api/violetspring/customersThatHavePaid', {
		method: 'GET',
		headers: {
		  'Authorization': `Bearer ${token}`
		}
	  })
	  .then(response => response.json())
	  .then(data => addClientCards(data))
	  .catch(error => console.error('Error:', error));
}
document.getElementById("customersThatHavePaid_btn").addEventListener("click", function() {
    PaidCustomers();
});


