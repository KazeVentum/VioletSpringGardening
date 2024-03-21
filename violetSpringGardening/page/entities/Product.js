export function totalProductsByOrder_title(){
    var title = document.querySelector("#totalProductsByOrder_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle;
} 

export function totalProductsByOrder() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/totalProductsByOrder', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
	
		const productCardsContainer = document.getElementById('showData');
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
                const orderCode = data.orderCode;
                const varietyProducts = data.varietyProducts;
                const totalProducts = data[1];

        
                html += `
                    <div class="card">
                        <div class="head">
                            <div>
                                <h1>Order:</h1>
                                <h2>${orderCode}</h2>
                                <br>
                                <li><strong>Variety of products:</strong> ${varietyProducts}</li>
                                <li><strong>Total of products:</strong> ${totalProducts}</li>			

		
                            </div>
                        </div>
                        </div>
                    </div>
                `;
            });
            productCardsContainer.innerHTML = html;
}})
    .catch(error => console.error('Error:', error));
}








export function productsWithoutOrder_title(){
    var title = document.querySelector("#productsWithoutOrder_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle;
}

export function productsWithoutOrder() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/productsWithoutOrder', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
	
		const productCardsContainer = document.getElementById('showData');
		let html = '';
		data.forEach(data => {
			const name = data;
	
			html += `
				<div class="card">
					<div class="head">
						<div>
							<h1>Product name:</h1>
							<h2>${name}</h2>			
						</div>
					</div>
					</div>
				</div>
			`;
		});
		productCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
}



export function productsWithoutOrderDescription_title(){
    var title = document.querySelector("#productsWithoutOrderDescription_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle;
}

export function productsWithoutOrderDescription() {
    const token = sessionStorage.getItem('jwtToken');
  
    fetch('http://localhost:8080/api/violetspring/productsWithoutOrdersDescription', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => {
      const productCardsContainer = document.getElementById('showData');
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
        console.log(data);
        data.forEach(item => {
          const plantName = item[0];
          const plantDescription = item[1];
  
          html += `
            <div class="card">
              <div class="head">
                <h1>${plantName}</h1>
              </div>
              <div class="description">
                ${plantDescription}
              </div>
            </div>
          `;
        });
      }
  
      productCardsContainer.innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
  }
  









export function varietyOfProductsInOrders_title(){
    var title = document.querySelector("#varietyOfProductsInOrders_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle;
}

export function varietyOfProductsInOrders() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/varietyOfProductsInOrders', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
	
		const productCardsContainer = document.getElementById('showData');
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
                const varietyProducts = data[1];

        
                html += `
                    <div class="card">
                        <div class="head">
                            <div>
                                <h1>Order:</h1>
                                <h2>${orderCode}</h2>
                                <br>
                                <li><strong>Variety of products:</strong> ${varietyProducts}</li>			
		
                            </div>
                        </div>
                        </div>
                    </div>
                `;
            });
            productCardsContainer.innerHTML = html;
}})
    .catch(error => console.error('Error:', error));
}


export function bestSellers_title(){
    var title = document.querySelector("#bestSellers_btn a");
    var newTitle = title.textContent;
    var dashboardTitle = document.getElementById("titleSection");
    dashboardTitle.innerHTML = newTitle;
}


export function bestSellers() {
    const token = sessionStorage.getItem('jwtToken'); 
    fetch('http://localhost:8080/api/violetspring/bestSellers', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
	
		const productCardsContainer = document.getElementById('showData');
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
                const productCode = data[0];
                const total = data[1];

        
                html += `
                    <div class="card">
                        <div class="head">
                            <div>
                                <h1>Product code:</h1>
                                <h2>${productCode}</h2>
                                <br>
                                <li><strong>Total units sold:</strong> ${total}</li>			
		
                            </div>
                        </div>
                        </div>
                    </div>
                `;
            });
            productCardsContainer.innerHTML = html;
}})
    .catch(error => console.error('Error:', error));
}