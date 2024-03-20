export function orderStatus_title(){
    var title = document.querySelector("#orderStatus_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle;
} 

export function orderStatus() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/orderStatus', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
	
		const orderCardsContainer = document.getElementById('showData');
		let html = '';

        if (data[0] === null) {
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
            data.forEach(status => {
                html += `
                    <div class="card">
                        <div class="head">
                            <div>
                                <h1>Status type:</h1>
                                <h2>${status}</h2>         
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        orderCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}





export function lateOrders_title(){
    var title = document.querySelector("#lateOrders_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle;
} 

export function lateOrders() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/lateOrders', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
	
		const orderCardsContainer = document.getElementById('showData');
		let html = '';

        if (data[0] === null) {
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
            data.forEach(data => {
                const orderCode = data[0];
                const client = data[1];
                const deliver = data[2];
                const expected = data[3];

        
                html += `
                    <div class="card">
                        <div class="head">
                            <div>
                                <h1>Order:</h1>
                                <h2>${orderCode}</h2>
                                <br>
                                <li><strong>Customer:</strong> ${client}</li>
                                <li><strong>Deliver date:</strong> ${deliver}</li>			
                                <li><strong>Expected date:</strong> ${expected}</li>			
		
                            </div>
                        </div>
                        </div>
                    </div>
                `;
            });
            orderCardsContainer.innerHTML = html;
}})
    .catch(error => console.error('Error:', error));
}




export function ordersRejectedInYear_form(){
    const orderCardsContainer = document.getElementById('showData');
    let html = '';
        html += `
            <div class="card">
                <div class="head">
                    <div>
                        <h1>Year:</h1>
                        <input class="controlsTwo" type="text" class="form-control" id="inputYear2" placeholder="Write here">
                        <br>
                        <div id="buttom">
                            <button class="btn-formulary" id="searchYearName_btn2">Send</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        `;
    orderCardsContainer.innerHTML = html;
}

export function ordersRejectedInYear_title(){
    var title = document.querySelector("#ordersRejectedInYear_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle;
}   

export function ordersRejectedInYear() {
    const token = sessionStorage.getItem('jwtToken'); 
    const FormYear = document.getElementById('inputYear2')
    const YearUser = FormYear.value;



    fetch('http://localhost:8080/api/violetspring/ordersRejectedInYear?year=' + YearUser, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const orderCardsContainer = document.getElementById('showData');
        let html = '';
    
        if (data[0] === null) {
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
            data.forEach(data => {
                const orderCode = data[0];
                const client = data[1];
                const deliver = data[2];
                const expected = data[3];
                const status = data[4];

        
                html += `
                    <div class="card">
                        <div class="head">
                            <div>
                                <h1>Order:</h1>
                                <h2>${orderCode}</h2>
                                <br>
                                <li><strong>Customer:</strong> ${client}</li>
                                <li><strong>Deliver date:</strong> ${deliver}</li>			
                                <li><strong>Expected date:</strong> ${expected}</li>
                                <li><strong>Status:</strong> ${status}</li>
                            </div>
                        </div>
                        </div>
                    </div>
                `;
            });
        }    
        orderCardsContainer.innerHTML = html;
        
    })
    .catch(error => console.error('Error:', error));
}





export function orderByStatus_title(){
    var title = document.querySelector("#orderByStatus_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle;
} 

export function orderByStatus() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/orderByStatus', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
	
		const orderCardsContainer = document.getElementById('showData');
		let html = '';

        if (data[0] === null) {
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
            data.forEach(data => {
                const status = data[0];
                const total = data[1];

        
                html += `
                    <div class="card">
                        <div class="head">
                            <div>
                                <h1>Status type:</h1>
                                <h2>${status}</h2>
                                <br>
                                <li><strong>Orders quantity:</strong> ${total}</li>			
		
                            </div>
                        </div>
                        </div>
                    </div>
                `;
            });
            orderCardsContainer.innerHTML = html;
}})
    .catch(error => console.error('Error:', error));
}