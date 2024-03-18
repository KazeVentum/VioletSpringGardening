export function employeesWithTheirBoss() {
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
export function employeesWithTheirBoss_title(){
    var title = document.querySelector("#employeesWithTheirBoss_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}


export function employeesWithTheBossOfTheirBoss() {
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
export function employeesWithTheBossOfTheirBoss_title(){
    var title = document.querySelector("#employeesWithTheBossOfTheirBoss_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}


export function employeesWithoutOffice() {
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
export function employeesWithoutOffice_title(){
    var title = document.querySelector("#employeesWithoutOffice_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle + " - Error:";
}


export function employeesWithoutCustomer() {
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
export function employeesWithoutCustomer_title(){
    var title = document.querySelector("#employeesWithoutCustomer_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle + " - Error:";
}


export function employeesOfficeWithoutCustomer() {
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
export function employeesOfficeWithoutCustomer_title(){
    var title = document.querySelector("#employeesOfficeWithoutCustomer_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}


export function employeesWithoutOfficeAndCustomer() {
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
        const lastName2 = data[2];


		html += `
			<div class="card">
				<div class="head">
					<div>
						<h1>Employee's name: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-vcard-fill" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
                      </svg></h1>
						<h2>${name} ${lastName}${lastName2}</h2>				
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

export function employeesWithoutOfficeAndCustomer_title(){
    var title = document.querySelector("#employeesWithoutOfficeAndCustomer_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}


export function employeesWithoutCustomersBoss() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/employeesWithoutCustomersBoss', {
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
        const bossName = data[2];
        const bossName1 = data[3];


		html += `
			<div class="card">
				<div class="head">
					<div>
						<h1>Employee's name: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-standing" viewBox="0 0 16 16">
                        <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0"/>
                      </svg></h1>
						<h2>${name} ${lastName}</h2>
                        <br>
                        <p><strong>Boss's Name:</strong> ${bossName} ${bossName1}</p>
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

export function employeesWithoutCustomersBoss_title(){
    var title = document.querySelector("#employeesWithoutCustomersBoss_btn a");
	var newTitle = title.textContent;
	var dashboardTittle = document.getElementById("titleSection");
	dashboardTittle.innerHTML = newTitle;
}


