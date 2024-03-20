export function officesWithClientsInSpecificCity_form(){
    const clientCardsContainer = document.getElementById('showData');
    let html = '';
        html += `
            <div class="card">
                <div class="head">
                    <div>
                        <h1>City Name:</h1>
                        <input class="controlsTwo" type="text" class="form-control" id="inputCity" placeholder="Write here">
                        <br>
                        <div id="buttom">
                            <button class="btn-formulary" id="searchCityName_btn">Send</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        `;
    clientCardsContainer.innerHTML = html;
}


export function officesWithClientsInSpecificCity() {
    const token = sessionStorage.getItem('jwtToken'); 
    const FormCity = document.getElementById('inputCity')
    const cityUser = FormCity.value;


    console.log(cityUser);


    fetch('http://localhost:8080/api/violetspring/officesWithClientsInSpecificCity?cityName=' + cityUser, {
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
            data.forEach(office => {
                const addressLine1 = office[0];
                const addressLine2 = office[1];
                const city = office[3];
                const region = office[2];
                const country = office[4];
                const zipCode = office[5];
                html += `
                <div class="card">
                    <div class="head">
                        <div>
                            <h1>Address Primary : <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-up" viewBox="0 0 16 16">
                                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.854 1.5 1.5a.5.5 0 0 1-.708.708L13 11.707V14.5a.5.5 0 0 1-1 0v-2.793l-.646.647a.5.5 0 0 1-.708-.708l1.5-1.5a.5.5 0 0 1 .708 0M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                                <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                                </svg>
                            </h1> 
                            <h2>${addressLine1}</h2>
                            <br>
                            <li><strong>Address Secundary:</strong> ${addressLine2}</li>
                            <li><strong>City:</strong> ${city}</li>
                            <li><strong>Region:</strong> ${region}</li>			
                            <li><strong>Country:</strong> ${country}</li>
                            <li><strong>ZipCode:</strong> ${zipCode}</li>			
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

export function officesWithClientsInSpecificCity_title(){
    var title = document.querySelector("#officesWithClientsInSpecificCity_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle;
}