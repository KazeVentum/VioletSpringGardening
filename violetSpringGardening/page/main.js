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
							<h1>Customer's Name: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
							<path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
							<path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
						  </svg></h1>
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
							<h1>Customer's Name: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-hourglass-bottom" viewBox="0 0 16 16">
							<path d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5m2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702s.18.149.5.149.5-.15.5-.15v-.7c0-.701.478-1.236 1.011-1.492A3.5 3.5 0 0 0 11.5 3V2z"/>
						  </svg>
						  </h1>
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
							<h1>Customer's Name: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart-x-fill" viewBox="0 0 16 16">
							<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708"/>
						  </svg></h1>
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
							<h1>Customer's Name: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bag-x-fill" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M6.854 8.146a.5.5 0 1 0-.708.708L7.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L8 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 10l1.147-1.146a.5.5 0 0 0-.708-.708L8 9.293z"/>
						  </svg>
						  </h1>
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


function customersWithOdersButWithoutPayments() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/customersWithOdersButWithoutPayments', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
		console.log(data);
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

document.getElementById("customersWithOdersButWithoutPayments_btn").addEventListener("click", function() {
	var title = document.querySelector("#customersWithOdersButWithoutPayments_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
    customersWithOdersButWithoutPayments();
});



// ENTITY EMPLOYEE QUERIES

function employeesWithTheirBoss() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/employeesWithTheirBoss', {
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
			const employeeName = data[0];
			const bossName = data[1];
			html += `
				<div class="card">
					<div class="head">
						<div>
						
							<h1>Employee's name: <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-person-fill-gear" viewBox="0 0 16 16">
							<path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4m9.886-3.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
						  </svg></h1> 
							<h2>${employeeName}</h2>
							<br>
							<li><strong>Boss's name:</strong> ${bossName}</li>					
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

document.getElementById("employeesWithTheirBoss_btn").addEventListener("click", function() {
	var title = document.querySelector("#employeesWithTheirBoss_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
    employeesWithTheirBoss();
});


function employeesWithTheBossOfTheirBoss() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/employeesWithTheBossOfTheirBoss', {
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
			const employeeName = data[0];
			const bossName = data[1];
			const bossOFBossName = data[2];
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Employee's name: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-up" viewBox="0 0 16 16">
								<path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
								<path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
								</svg>
							</h1> 
							<h2>${employeeName}</h2>
							<br>
							<li><strong>Boss's name:</strong> ${bossName}</li>
							<li><strong>Boss's boss:</strong> ${bossOFBossName}</li>						
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

document.getElementById("employeesWithTheBossOfTheirBoss_btn").addEventListener("click", function() {
	var title = document.querySelector("#employeesWithTheBossOfTheirBoss_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
    employeesWithTheBossOfTheirBoss();
});


function employeesWithoutOffice() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/employeesWithoutOffice', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.getElementById('showData');
        let html = '';

        if (data.length === 0) {
        	console.error("Error, The query has no data as a response.")
            html += `
            <div class="message">
                <p>Sorry, there is no data available to display.</p>
                <div class="img-Error">
                    <img src="../src/main/resources/404.jpg" alt="404 bad request image">
                </div>
            </div>
            `;
        } else {
            data.forEach(employee => {
                const { employeeName, bossName, bossOFBossName } = employee;
                html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Employee's name: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-up" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                                </svg>
                            </h1> 
                            <h2>${employeeName}</h2>
                            <br>
                            <li><strong>Boss's name:</strong> ${bossName}</li>
                            <li><strong>Boss's boss:</strong> ${bossOFBossName}</li>						
                        </div>
                    </div>
                </div>
                `;
            });
        }
        
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("employeesWithoutOffice_btn").addEventListener("click", function() {
    var title = document.querySelector("#employeesWithoutOffice_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle + " - Error:";
    employeesWithoutOffice();
});


function employeesWithoutCustomer() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/employeesWithoutCustomer', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.getElementById('showData');
        let html = '';

        if (data.length === 0) {
        	console.error("Error, The query has no data as a response.")
            html += `
            <div class="message">
                <p>Sorry, there is no data available to display.</p>
                <div class="img-Error">
                    <img src="../src/main/resources/404.jpg" alt="404 bad request image">
                </div>
            </div>
            `;
        } else {
            data.forEach(employee => {
                const { employeeName, bossName, bossOFBossName } = employee;
                html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Employee's name: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-up" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                                </svg>
                            </h1> 
                            <h2>${employeeName}</h2>
                            <br>
                            <li><strong>Boss's name:</strong> ${bossName}</li>
                            <li><strong>Boss's boss:</strong> ${bossOFBossName}</li>						
                        </div>
                    </div>
                </div>
                `;
            });
        }
        
        clientCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById("employeesWithoutCustomer_btn").addEventListener("click", function() {
    var title = document.querySelector("#employeesWithoutCustomer_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle + " - Error:";
    employeesWithoutCustomer();
});


function employeesOfficeWithoutCustomer() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/employeesOfficeWithoutCustomer', {
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
		const name = data[0];
		const lastName = data[1];
		const officeCode = data[3];
		const cityOffice = data[2];
		const countryOffice = data[4];


		html += `
			<div class="card">
				<div class="head">
					<div>
						<h1>Employee's name: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-dash" viewBox="0 0 16 16">
						<path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
						<path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
					  </svg></h1>
						<h2>${name} ${lastName} </h2>
						<br>
						<h1>Office:</h1>
						<ul>
							<li><strong>Code:</strong> ${officeCode}</li>
							<li><strong>City:</strong> ${cityOffice}</li>
							<li><strong>Country:</strong> ${countryOffice}</li>
						</ul>				
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

document.getElementById("employeesOfficeWithoutCustomer_btn").addEventListener("click", function() {
	var title = document.querySelector("#employeesOfficeWithoutCustomer_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
    employeesOfficeWithoutCustomer();
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




