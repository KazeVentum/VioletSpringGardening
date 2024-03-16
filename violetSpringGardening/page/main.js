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



// ENTITY CUSTOMERS QUERIES

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
	
		const clientCardsContainer = document.getElementById('showData');
		let html = '';
		data.forEach(data => {
			const title = data[0];
			const name = data[1];
	
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Customer:</h1>
							<h2>${title}</h2>
							<br>
							<li><strong>Sales representative:</strong> ${name}</li>			
						</div>
					</div>
					</div>
				</div>
			`;
		});
		clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("customersWithSalesRep_btn").addEventListener("click", function() {
	var title = document.querySelector("#customersWithSalesRep_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
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
	.then(data => {
	
		const clientCardsContainer = document.getElementById('showData');
		let html = '';
		data.forEach(data => {
			const title = data[0];
			const name = data[1];
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Paying Customer:</h1>
							<h2>${title}</h2>
							<br>
							<li><strong>Sales representative:</strong> ${name}</li>					
						</div>
					</div>
					</div>
				</div>
			`;
		});
		clientCardsContainer.innerHTML = html;
    })
	.catch(error => console.error('Error:', error));
}
document.getElementById("customersThatHavePaid_btn").addEventListener("click", function() {
	var title = document.querySelector("#customersThatHavePaid_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
	console.log(newTitle);
    PaidCustomers();
});


function paidCustomerOffice() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/customersThatHavePaidAndOfficeCity', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
	
		const clientCardsContainer = document.getElementById('showData');
		let html = '';
		data.forEach(data => {
			const customer = data[0];
			const repSale = data[1];
			const cityOffice = data[2];
	
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Customer:</h1>
							<h2>${customer}</h2>
							<br>
							<li><strong>Sales representative:</strong> ${repSale}</li>
							<br>	
							<li><strong>Office city:</strong> ${cityOffice}</li>				
						</div>
					</div>
					</div>
				</div>
			`;
		});
		clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("customersThatHavePaidAndOfficeCity_btn").addEventListener("click", function() {
	var title = document.querySelector("#customersThatHavePaidAndOfficeCity_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
    paidCustomerOffice();
});




function cleanToken() {
	sessionStorage.removeItem('jwtToken');
	localStorage.removeItem('jwtToken');
	console.log('Token removed from sessionStorage');
  }

	const buttonClearToken = document.getElementById('buttonClearToken'); 
	buttonClearToken.addEventListener('click', function() {
		cleanToken();
	});


