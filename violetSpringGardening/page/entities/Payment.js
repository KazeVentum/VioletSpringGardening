export function averagePaymentByYear_form(){
    const clientCardsContainer = document.getElementById('showData');
    let html = '';
        html += `
            <div class="card">
                <div class="head">
                    <div>
                        <h1>Year:</h1>
                        <input class="controlsTwo" type="text" class="form-control" id="inputYear" placeholder="Write here">
                        <br>
                        <div id="buttom">
                            <button class="btn-formulary" id="searchYearName_btn">Send</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        `;
    clientCardsContainer.innerHTML = html;
}

export function averagePaymentByYear() {
    const token = sessionStorage.getItem('jwtToken'); 
    const FormYear = document.getElementById('inputYear')
    const YearUser = FormYear.value;


    fetch('http://localhost:8080/api/violetspring/averagePaymentByYear?year=' + YearUser, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const clientCardsContainer = document.getElementById('showData');
        let html = '';
    
        if (data[0] === null) {
            console.error("Error, The query has no data as a response.");
            html += `
            <div class="message">
                <p>Sorry, we don't have data for that year</p>
                <div class="img-Error">
                    <img src="../src/main/resources/404.jpg" alt="404 bad request image">
                </div>
            </div>
            `;
        } else {
            data.forEach(averagePayment => {
                html += `
                    <div class="card">
                        <div class="head">
                            <div>
                                <h1>Average Payment:</h1>
                                <h2>${averagePayment.toFixed(2)}</h2>       
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

export function averagePaymentByYear_title(){
    var title = document.querySelector("#averagePaymentByYear_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle;
}


export function paymentsByCustomer() {
    const token = sessionStorage.getItem('jwtToken'); 

    fetch('http://localhost:8080/api/violetspring/paymentsByCustomer', {
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
            console.error("Error, The query has no data as a response.");
            html += `
            <div class="message">
                <p>Sorry, there is no data available to display.</p>
                <div class="img-Error">
                    <img src="../src/main/resources/404.jpg" alt="404 bad request image">
                </div>
            </div>
            `;
        } else {
            data.forEach(total => {
                const clientName = total[0];
                const customerName= total[1];
                const customerLastName = total[2];
                var firstPayment = total[3];
                var lastPayment = total[4];

                if (firstPayment === null || lastPayment === null) {
                    firstPayment = "No data";
                    lastPayment = "No data";
                } else {
                    firstPayment = total[3];
                    lastPayment = total[4];
                }

                html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Client: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16"><path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
								<path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
							</svg></h1>
								<h2>${clientName}</h2>
								<br>
								<h3>Payment details:</h3>   
                                <li><strong>Name:</strong>  ${customerName} ${customerLastName}</li>
                                <li><strong>First Payment:</strong>  ${firstPayment}</li>
                                <li><strong>Last Payment:</strong>  ${lastPayment}</li>
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

export function paymentsByCustomer_title() {
    var title = document.querySelector("#paymentsByCustomer_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}



export function paymentTotalPerYear() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/paymentTotalPerYear', {
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
			const year = request[0];
			const cost = request[1];
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Year: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list-ol" viewBox="0 0 16 16">
							<path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>
							<path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>
						  </svg></h1>
							<h2>${year}</h2>
							<br>
							<li><strong>Payment:</strong></li><span id="quantity" >$ ${cost.toLocaleString(undefined, {minimumFractionDigits: 0})}</span>
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


export function paymentTotalPerYear_title() {
    var title = document.querySelector("#paymentTotalPerYear_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}


