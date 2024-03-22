# VioletSpringGardening API 👾

Welcome to the documentation for VioletSpring API - the API for Gardening, a gardening company's web application. This API allows users to interact with the gardening company's database to perform various operations such as registering, logging in, searching through entities the queries, all with secure authentication, and handling exceptions efficiently. It's built in Java, secured with Spring Security JWT, and provides a Swagger interface for easy exploration. The API is intended to be consumed with JavaScript and offers an HTML/CSS interface for registration, login, and database queries.

![img]()

## Table of Contents
1. [Authentication](#authentication)
2. [Endpoints](#endpoints)
    - [Register](#register)
    - [Login](#login)
    - [Search](#search)
3. [Web](#web)
4. [Exceptions](#exceptions)
5. [Swagger Documentation](#swagger-documentation)

## Authentication and Security

Authentication for VioletSpring API is done using JSON Web Tokens (JWT). Upon successful login, the user receives a JWT token which must be included in the headers of subsequent requests to access protected endpoints.

## Endpoints

### Register

#### `POST /register`

Allows users to register for an account with VioletSpring.

**Body**

```json
{
  "username": "example_user",
  "password": "example_password"
}
```

### Login

#### `POST /login`

Allows users to login to their VioletSpring account.

**Body**

```json
{
  "username": "example_user",
  "password": "example_password"
}
```

**Response**

Upon successful authentication, a JWT token is returned.

```json
{
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

### Search Queries

Allows users to search through the database for specific entities.

**Some queries Request Parameters**

- `entity`: The parameter to search for (city, products, year, etc.).

**Response**

Returns a list of entities matching the search criteria.

```json
[
  {
    "id": 1,
    "name": "Sunflower",
    "type": "Flower",
    "description": "A beautiful yellow flower that blooms in the sun."
  },
  {
    "id": 2,
    "name": "Rake",
    "type": "Tool",
    "description": "A tool used for collecting leaves and other debris."
  }
]
```
## Data Base

![img]()

## Web

![img]()


## Exceptions

VioletSpring API handles exceptions gracefully, providing meaningful error messages and images in case of failures. Common exceptions include invalid authentication, invalid requests, and database errors.

## Swagger Documentation

Swagger documentation for ViolerSpring API can be accessed at `http://localhost:8080/doc/swagger-ui/index.html`. This interactive documentation provides a user-friendly interface for exploring and testing the API endpoints.

![img]()

---

This concludes the documentation for VioletSpring API. If you have any further questions or need assistance, please contact us. Happy gardening! 🌱🌻🪴2024

- Christian Camilo Pardo
- Violeta Villamizar Acuña
