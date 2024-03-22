<p align="left">
  <img src="https://img.icons8.com/external-tal-revivo-duo-tal-revivo/100/external-markdown-a-lightweight-markup-language-with-plain-text-formatting-syntax-logo-duo-tal-revivo.png" width="100" />
</p>
<p align="left">
    <h1 align="left">VIOLETSPRINGGARDENING</h1>
</p>
<p align="left">
    <em>Welcome to VioletSpringGardening, A proyect developted in CampusLands</em>
</p>
<p align="left">
		<em>Developed with the software and tools below.</em>
</p>
<p align="left">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/java-%23ED8B00.svg?style=flat&logo=openjdk&logoColor=white" alt="java">
	<img src="https://img.shields.io/badge/Spring-000000.svg?style=flat&logo=Spring&logoColor=white" alt="Spring">
    <img src="https://img.shields.io/badge/CSS3-487BDF.svg?style=flat&logo=css3&logoColor=white" alt="CSS">
    <img src="https://img.shields.io/badge/Valo-FA0000.svg?style=flat&logo=valorant&logoColor=white" alt="CSS">

</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🖊️ Design](#-design)
> - [🔏 Authentication and Security](#-authentication-and-security)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running VioletSpringGardening](#-running-VioletSpringGardening)
>   - [🧪 Tests](#-tests)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

Welcome to the documentation for VioletSpring API - the API for Gardening, a gardening company's web application. This API allows users to interact with the gardening company's database to perform various operations such as registering, logging in, searching through entities the queries, all with secure authentication, and handling exceptions efficiently. It's built in Java, secured with Spring Security JWT, and provides a Swagger interface for easy exploration. The API is intended to be consumed with JavaScript and offers an HTML/CSS interface for registration, login, and database queries

---

## 📦 Features

## MySQL Connection Configuration
- **Database URL:** jdbc:mysql://localhost:3306/jardineria
- **Database Username:** root
- **Database Password:** campus2024
- **Database Driver:** com.mysql.cj.jdbc.Driver

## Hibernate Specific Configuration
- **Hibernate Auto DDL:** update
- **Show Hibernate SQL:** true
- **Hibernate Dialect:** org.hibernate.dialect.MySQL8Dialect
- **Hibernate SQL Logging Level:** debug

## SpringDoc Configuration with Swagger
- **Enable API Documentation Generation:** true
- **Enable Swagger UI:** true
- **Path to access Swagger UI:** /doc/swagger-ui.html
- **Packages to Scan for SpringDoc Classes:** com.example.violetSpringGardening.web.controller


---

## 🖊️ Design


<details closed><summary> 🍃 Design creation</summary>

- **Preliminary Design**
  The designs made for our application VioletSpringGardening were created in Miro.

  -  **Login**

    ![LoginMiro](/violetSpringGardening/src/main/resources/readme/logIn.png)

---

  - **Dashboard**

    ![DashBoardMiro](/violetSpringGardening/src/main/resources/readme/Inicio.png)

---

  - **Dashboard unfolded**

    ![LoginMiro](/violetSpringGardening/src/main/resources/readme/LoginJavaScript.png)

---
</details>

<details closed><summary> 🔚 Final Application Design</summary>

- **Application Design**
- This design was built upon the foundation from Miro.

  -  **Login**

    ![LoginApp](/violetSpringGardening/src/main/resources/readme/LoginApp.png)

---

  - **Register**

    ![RegisterApp](/violetSpringGardening/src/main/resources/readme/RegisterApp.png)

---

  - **Dashboard**

    ![DashboardApp](/violetSpringGardening/src/main/resources/readme/indexApp.png)

---

  - **Functioning**

    ![QueryOne](/violetSpringGardening/src/main/resources/readme/queryOneApp.png)
    ---
    ![QueryTwo](/violetSpringGardening/src/main/resources/readme/query2.png)

---

</details>


## 🔏 Authentication and Security

Authentication for VioletSpring API is done using JSON Web Tokens (JWT). Upon successful login, the user receives a JWT token which must be included in the headers of subsequent requests to access protected endpoints.

## 🔗 Endpoints
    
   - ### Employee 
        ```
            /api/violetspring/findCompanyBoss
        ```

        ```
            /api/violetspring/employeesWithoutOffice
        ```
        
        ```
            /api/violetspring/employeesWithoutOfficeAndCustomer
        ```
        
        ```
            /api/violetspring/employeesWithoutCustomer
        ```
        
        ```
            /api/violetspring/employeesWithTheBossOfTheirBoss
        ```
        
        ```
            /api/violetspring/employeesOfficeWithoutCustomer
        ```
        
        ```
            /api/violetspring/employees/all
        ```
        
        ```
            /api/violetspring/countEmployees
        ```

   - ### Product

        ```
            /api/violetspring/bestSellers
        ```

        ```
            /api/violetspring/products/all
        ```

        ```
            /api/violetspring/productsWithoutOrder
        ```

        ```
            /api/violetspring/productsWithoutOrdersDescription
        ```

        ```
            /api/violetspring/totalProductsByOrder
        ```
   - ### Customer
        ```
            /api/violetspring/CountByCityLikeIgnoreCase 
        ```
        
        ```
            /api/violetspring/allCustomersWithSalesRepCity
        ```
        
        ```
            /api/violetspring/countCustomers
        ```
        
        ```
            /api/violetspring/customers/all
        ```
        
        ```
            /api/violetspring/customersPerCountry
        ```
        
        ```
            /api/violetspring/customersThatHavePaidAndOfficeCity
        ```
        
        ```
            /api/violetspring/customersThatHavePaid
        ```
        
        ```
            /api/violetspring/customersThatHaventPaidAndOfficeCity
        ```
        
        ```
            /api/violetspring/customersWithLateDeliveries
        ```
        
        ```
            /api/violetspring/customersWithOdersButWithoutPayments
        ```
        
        ```
            /api/violetspring/customersWithSalesRep
        ```
        
        ```
            /api/violetspring/customersWithoutOrdersAndPayments
        ```
        
        ```
            /api/violetspring/customersWithoutOrders
        ```
        
        ```
            /api/violetspring/customersWithoutPayments
        ```
        
        ```
            /api/violetspring/totalCustomersByCity
        ```
        
        ```
            /api/violetspring/totalCustomersWithoutEmployee
        ```
        

            

## 📂 Repository Structure

```sh
└── VioletSpringGardening/
    ├── README.md
    └── violetSpringGardening
        ├── .gitignore
        ├── .mvn
        │   └── wrapper
        │       ├── maven-wrapper.jar
        │       └── maven-wrapper.properties
        ├── mvnw
        ├── mvnw.cmd
        ├── page
        │   ├── entities
        │   │   ├── Customer.js
        │   │   ├── Employee.js
        │   │   ├── Office.js
        │   │   ├── Order.js
        │   │   ├── Payment.js
        │   │   └── Product.js
        │   ├── functionality
        │   │   ├── app.js
        │   │   ├── auth.js
        │   │   └── main.js
        │   ├── index.html
        │   ├── login.html
        │   ├── register.html
        │   └── styles
        │       ├── dashboardStyle.css
        │       └── style.css
        ├── pom.xml
        └── src
            ├── main
            │   ├── java
            │   │   └── com
            │   └── resources
            │       ├── 404.jpg
            │       ├── application.properties
            │       ├── backgroundLogin.png
            │       ├── backgroundRegister.png
            │       ├── chimba.txt
            │       ├── data.sql
            │       ├── db.sql
            │       ├── juanMarinoProfile.jpeg
            │       ├── link.txt
            │       └── violetSpringIcon.png
            └── test
                └── java
                    └── com
```

---

## 🧩 Modules

<details closed><summary>violetSpringGardening</summary>

| File                                                                                                           |                                                     |
| ---                                                                                                            | ---                                                        |
| [mvnw.cmd](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/mvnw.cmd) |
| [pom.xml](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/pom.xml)   | 
| [mvnw](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/mvnw)         |

</details>

<details closed><summary>violetSpringGardening.page</summary>

| File                                                                                                                          |                                                               |
| ---                                                                                                                           | ---                                                                  |
| [login.html](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/login.html)       | 
| [index.html](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/index.html)       | 
| [register.html](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/register.html) | 
</details>

<details closed><summary>violetSpringGardening.page.styles</summary>

| File                                                                                                                                           |                                                                           |
| ---                                                                                                                                            | ---                                                                              |
| [dashboardStyle.css](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/styles/dashboardStyle.css) | |
| [style.css](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/styles/style.css)                   | |

</details>


<details closed><summary>violetSpringGardening.page.entities</summary>

| File                                                                                                                               | Summary                                                                     |
| ---                                                                                                                                | ---                                                                         |
| [Office.js](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/entities/Office.js)     |
| [Employee.js](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/entities/Employee.js) |
| [Customer.js](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/entities/Customer.js) |
| [Payment.js](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/entities/Payment.js)   |
| [Product.js](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/entities/Product.js)   |
| [Order.js](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/entities/Order.js)       |

</details>

<details closed><summary>violetSpringGardening.page.functionality</summary>

| File                                                                                                                            | Summary                                                                      |
| ---                                                                                                                             | ---                                                                          |
| [auth.js](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/functionality/auth.js) |
| [main.js](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/functionality/main.js) |
| [app.js](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/page/functionality/app.js)   |

</details>

<details closed><summary>violetSpringGardening.src.main.java.com.example.violetSpringGardening.persistence.entity</summary>

| File                                                                                                                                                                                                  |                                                                                                                                  |
| ---                                                                                                                                                                                                   | ---                                                                                                                                     |
| [Customer.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/persistence/entity/Customer.java)           | 
| [Payment.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/persistence/entity/Payment.java)             | 
| [Product.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/persistence/entity/Product.java)             | 
| [Employee.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/persistence/entity/Employee.java)           | 
| [Order.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/persistence/entity/Order.java)                 | 
| [ProductRange.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/persistence/entity/ProductRange.java)   | 
| [Office.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/persistence/entity/Office.java)               | 
| [OrderDetailId.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/persistence/entity/OrderDetailId.java) | 
| [User.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/persistence/entity/User.java)                   | 
| [OrderDetail.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/persistence/entity/OrderDetail.java)     | 
| [Admin.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/persistence/entity/Admin.java)                 | 

</details>

<details closed><summary>violetSpringGardening.src.main.java.com.example.violetSpringGardening.domain.repository</summary>

| File                                                                                                                                                                                                                   |                                                                                                                                          |
| ---                                                                                                                                                                                                                    | ---                                                                                                                                             |
| [ProductRangeRepository.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/repository/ProductRangeRepository.java) | 
| [OfficeRepository.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/repository/OfficeRepository.java)             | 
| [AdminRepository.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/repository/AdminRepository.java)               | 
| [OrderDetailRepository.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/repository/OrderDetailRepository.java)   | 
| [ProductRepository.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/repository/ProductRepository.java)           | 
| [CustomerRepository.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/repository/CustomerRepository.java)         | 
| [EmployeeRepository.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/repository/EmployeeRepository.java)         | 
| [PaymentRepository.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/repository/PaymentRepository.java)           | 
| [OrderRepository.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/repository/OrderRepository.java)               | 

</details>

<details closed><summary>violetSpringGardening.src.main.java.com.example.violetSpringGardening.domain.service</summary>

| File                                                                                                                                                                                                                  |                                                                                                                                        |
| ---                                                                                                                                                                                                                   | ---                                                                                                                                           |
| [EmployeeServiceImpl.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/service/EmployeeServiceImpl.java)         | 
| [ServiceInterface.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/service/ServiceInterface.java)               | 
| [OfficeServiceImpl.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/service/OfficeServiceImpl.java)             | 
| [PaymentServiceImpl.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/service/PaymentServiceImpl.java)           | 
| [AdminInterface.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/service/AdminInterface.java)                   | 
| [CustomerServiceImpl.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/service/CustomerServiceImpl.java)         | 
| [ProductRangeServiceImpl.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/service/ProductRangeServiceImpl.java) | 
| [OrderDetailServiceImpl.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/service/OrderDetailServiceImpl.java)   | 
| [ProductServiceImpl.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/service/ProductServiceImpl.java)           | 
| [OrderServiceImpl.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/service/OrderServiceImpl.java)               | 
| [AdminInterfaceImpl.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/service/AdminInterfaceImpl.java)           | 

</details>

<details closed><summary>violetSpringGardening.src.main.java.com.example.violetSpringGardening.domain.exceptions</summary>

| File                                                                                                                                                                                                                       |                                                                                                                                            |
| ---                                                                                                                                                                                                                        | ---                                                                                                                                               |
| [AdminIdNotFoundException.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/exceptions/AdminIdNotFoundException.java) |
| [AdminNotFoundException.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/exceptions/AdminNotFoundException.java)     |
| [GlobalExceptionHandler.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/exceptions/GlobalExceptionHandler.java)     |
| [ErrorResponses.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/exceptions/ErrorResponses.java)                     |

</details>

<details closed><summary>violetSpringGardening.src.main.java.com.example.violetSpringGardening.domain.security</summary>

| File                                                                                                                                                                                                                     |                                                                                                                                         |
| ---                                                                                                                                                                                                                      | ---                                                                                                                                             |
| [Constans.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/security/Constans.java)                                 | 
| [JWTAuthorizationFilter.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/security/JWTAuthorizationFilter.java)     | 
| [WebSecurityConfig.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/security/WebSecurityConfig.java)               | 
| [OpenApiConfig.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/security/OpenApiConfig.java)                       | 
| [JWTAuthtenticationConfig.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/security/JWTAuthtenticationConfig.java) | 
| [CorsConfig.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/domain/security/CorsConfig.java)                             | 

</details>

<details closed><summary>violetSpringGardening.src.main.java.com.example.violetSpringGardening.web.controller</summary>

| File                                                                                                                                                                                                                |                                                                                                                                       |
| ---                                                                                                                                                                                                                 | ---                                                                                                                                          |
| [OrderDetailController.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/web/controller/OrderDetailController.java)   |    
| [EmployeeController.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/web/controller/EmployeeController.java)         |       
| [LoginController.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/web/controller/LoginController.java)               |         
| [AdminController.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/web/controller/AdminController.java)               |         
| [OfficeController.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/web/controller/OfficeController.java)             |         
| [CustomerController.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/web/controller/CustomerController.java)         |      
| [ProductRangeController.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/web/controller/ProductRangeController.java) |  
| [PaymentController.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/web/controller/PaymentController.java)           |       
| [OrderController.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/web/controller/OrderController.java)               |         
| [ProductController.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/main/java/com/example/violetSpringGardening/web/controller/ProductController.java)           |        

</details>

<details closed><summary>violetSpringGardening.src.test.java.com.example.violetSpringGardening</summary>

| File                                                                                                                                                                                                                               |                                                                                                                                       |
| ---                                                                                                                                                                                                                                | ---                                                                                                                                          |
| [VioletSpringGardeningApplicationTests.java](https://github.com/KazeVentum/VioletSpringGardening.git/blob/master/violetSpringGardening/src/test/java/com/example/violetSpringGardening/VioletSpringGardeningApplicationTests.java) |  

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **Java**: `version 17`

### ⚙️ Installation

1. Clone the VioletSpringGardening repository:

```sh
git clone https://github.com/KazeVentum/VioletSpringGardening.git
```

2. Change to the project directory:

```sh
cd VioletSpringGardening
```

3. Install the dependencies:

```sh
mvn clean install
```

### 🤖 Running VioletSpringGardening

Use the following command to run VioletSpringGardening:

```sh
java -jar target/myapp.jar
```

### 🧪 Tests

To execute tests, run:

```sh
mvn test
```

---

## Exceptions

VioletSpring API handles exceptions gracefully, providing meaningful error messages and images in case of failures. Common exceptions include invalid authentication, invalid requests, and database errors.

## Swagger Documentation

Swagger documentation for ViolerSpring API can be accessed at `http://localhost:8080/doc/swagger-ui/index.html`. This interactive documentation provides a user-friendly interface for exploring and testing the API endpoints.

![Swagger](/violetSpringGardening/src/main/resources/readme/Swagger.png)

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/KazeVentum/VioletSpringGardening.git/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/KazeVentum/VioletSpringGardening.git/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/KazeVentum/VioletSpringGardening.git/issues)**: Submit bugs found or log feature requests for Violetspringgardening.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/KazeVentum/VioletSpringGardening.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

This concludes the documentation for VioletSpring API. If you have any further questions or need assistance, please contact us. Happy gardening! 🌱🌻🪴2024

- Christian Camilo Pardo
- Violeta Villamizar Acuña

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

    [**Juan Enginner**](#-quick-links)

---
