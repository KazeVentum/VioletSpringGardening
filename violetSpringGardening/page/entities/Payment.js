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
                <p>Sorry, there is no data available to display.</p>
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
                                <h2>${averagePayment}</h2>         
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