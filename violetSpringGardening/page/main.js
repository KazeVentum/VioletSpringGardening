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


function UnPaidCustomers() {
	const token = sessionStorage.getItem('jwtToken'); 
	fetch('http://localhost:8080/api/violetspring/customersThatHaventPaid', {
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
							<h1>Unpaid customer:</h1>
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
document.getElementById("customersThatHaventPaid_btn").addEventListener("click", function() {
	var title = document.querySelector("#customersThatHaventPaid_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
	console.log(newTitle);
    UnPaidCustomers();
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
							<h1>Paid Customer:</h1>
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


function UnpaidCustomerOffice() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/customersThatHaventPaidAndOfficeCity', {
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
							<h1>Unpaid Customer:</h1>
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

document.getElementById("customersThatHaventPaidAndOfficeCity_btn").addEventListener("click", function() {
	var title = document.querySelector("#customersThatHaventPaidAndOfficeCity_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
    UnpaidCustomerOffice();
});

function AllCustomerOffice() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/allCustomersWithSalesRepCity', {
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
							<h1>Customer's Name:</h1>
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

document.getElementById("allCustomersWithSalesRepCity_btn").addEventListener("click", function() {
	var title = document.querySelector("#allCustomersWithSalesRepCity_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
    AllCustomerOffice();
});


function CustomerWithLateDelivery() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/customersWithLateDeliveries', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
		const clientCardsContainer = document.getElementById('showData');
		let html = '';
		data.forEach(name => {
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Customer's Name:</h1>
							<h2>${name}</h2>         
						</div>
					</div>
				</div>
			`;
		});
		clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("customersWithLateDeliveries_btn").addEventListener("click", function() {
	var title = document.querySelector("#customersWithLateDeliveries_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
    CustomerWithLateDelivery();
});


function CustomersWithoutPayment() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/customersWithoutPayments', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
		const clientCardsContainer = document.getElementById('showData');
		let html = '';
		data.forEach(client => {
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Customer's Name:</h1>
							<h2>${client.customerName}</h2>         
						</div>
					</div>
				</div>
			`;
		});
		clientCardsContainer.innerHTML = html;
	})		
    .catch(error => console.error('Error:', error));
}

document.getElementById("customersWithoutPayments_btn").addEventListener("click", function() {
	var title = document.querySelector("#customersWithoutPayments_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
    CustomersWithoutPayment();
});


function CustomersWithoutOrder() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/customersWithoutOrders', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
		const clientCardsContainer = document.getElementById('showData');
		let html = '';
		data.forEach(client => {
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Customer's Name:</h1>
							<h2>${client}</h2>         
						</div>
					</div>
				</div>
			`;
		});
		clientCardsContainer.innerHTML = html;
	})		
    .catch(error => console.error('Error:', error));
}

document.getElementById("customersWithoutOrders_btn").addEventListener("click", function() {
	var title = document.querySelector("#customersWithoutOrders_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
    CustomersWithoutOrder();
});


function CustomersWithoutOrderAndPayment() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/customersWithoutOrdersAndPayments', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
		const clientCardsContainer = document.getElementById('showData');
		let html = '';
		data.forEach(client => {
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Customer's Name:</h1>
							<h2>${client}</h2>         
						</div>
					</div>
				</div>
			`;
		});
		clientCardsContainer.innerHTML = html;
	})		
    .catch(error => console.error('Error:', error));
}

document.getElementById("customersWithoutOrdersAndPayments_btn").addEventListener("click", function() {
	var title = document.querySelector("#customersWithoutOrdersAndPayments_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
    CustomersWithoutOrderAndPayment();
});

function customersWithOrdersButWithoutPayments() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/customersWithOdersButWithoutPayments', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
		const clientCardsContainer = document.getElementById('showData');
		let html = '';
		data.forEach(client => {
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Customer's Name:</h1>
							<h2>${client}</h2>         
						</div>
					</div>
				</div>
			`;
		});
		clientCardsContainer.innerHTML = html;
	})		
    .catch(error => console.error('Error:', error));
}

document.getElementById("customersWithOrdersButWithoutPayments_btn").addEventListener("click", function() {
	var title = document.querySelector("#customersWithOrdersButWithoutPayments_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
    customersWithOrdersButWithoutPayments();
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




