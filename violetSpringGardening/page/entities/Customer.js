// ENTITY CUSTOMERS QUERIES

export function customersWithSalesRep() {
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

export function customersWithSalesRep_title(){
    const title = document.querySelector("#customersWithSalesRep_btn a");
    const newTitle = title.textContent;
    const dashboardTittle = document.getElementById("titleSection");
    dashboardTittle.innerHTML = newTitle;
}




export function PaidCustomers() {
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

export function PaidCustomers_title() {
    var title = document.querySelector("#customersThatHavePaid_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
	console.log(newTitle);
}



export function UnPaidCustomers() {
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

export function UnPaidCustomers_title() {
    var title = document.querySelector("#customersThatHaventPaid_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
	console.log(newTitle);
}


export function paidCustomerOffice() {
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

export function paidCustomerOffice_title() {
    var title = document.querySelector("#customersThatHavePaidAndOfficeCity_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}


export function UnpaidCustomerOffice() {
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

export function UnpaidCustomerOffice_title() {
    var title = document.querySelector("#customersThatHaventPaidAndOfficeCity_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}


export function AllCustomerOffice() {
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

export function AllCustomerOffice_title() {
    var title = document.querySelector("#allCustomersWithSalesRepCity_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}


export function CustomerWithLateDelivery() {
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

export function CustomerWithLateDelivery_title() {
    var title = document.querySelector("#customersWithLateDeliveries_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}



export function CustomersWithoutPayment() {
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

export function CustomersWithoutPayment_title() {
    var title = document.querySelector("#customersWithoutPayments_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
} 


export function CustomersWithoutOrder() {
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

export function CustomersWithoutOrder_title() {
    var title = document.querySelector("#customersWithoutOrders_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}


export function CustomersWithoutOrderAndPayment() {
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

export function CustomersWithoutOrderAndPayment_title() {
    var title = document.querySelector("#customersWithoutOrdersAndPayments_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}



export function customersWithOdersButWithoutPayments() {
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

export function customersWithOdersButWithoutPayments_title() {
    var title = document.querySelector("#customersWithOdersButWithoutPayments_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}

export function customersPerCountry() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/customersPerCountry', {
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
		data.forEach(request => {
			const country = request[0];
			const quantity = request[1];
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Country Name: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>
							<path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>
						  </svg></h1>
							<h2>${country}</h2>
							<br>
							<li><strong>Quantity:</strong></li><span id="quantity" >${quantity}</span>
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

export function customersPerCountry_title() {
    var title = document.querySelector("#customersPerCountry_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}


