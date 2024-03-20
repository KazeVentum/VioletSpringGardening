import * as Employee from "../entities/Employee.js";
import * as Customer from "../entities/Customer.js";
import * as Office from "../entities/Office.js";
import * as Payment from "../entities/Payment.js";

// Customer Queries
document.getElementById("customersWithSalesRep_btn").addEventListener("click", function() {
    Customer.customersWithSalesRep_title();
    Customer.customersWithSalesRep();
});

document.getElementById("customersThatHavePaid_btn").addEventListener("click", function() {
    Customer.PaidCustomers_title();
    Customer.PaidCustomers();
});

document.getElementById("customersThatHaventPaid_btn").addEventListener("click", function() {
    Customer.UnPaidCustomers_title();
    Customer.UnPaidCustomers();
});

document.getElementById("customersThatHavePaidAndOfficeCity_btn").addEventListener("click", function() {
    Customer.paidCustomerOffice_title();
    Customer.paidCustomerOffice();
});

document.getElementById("customersThatHaventPaidAndOfficeCity_btn").addEventListener("click", function() {
    Customer.UnpaidCustomerOffice_title();
    Customer.UnpaidCustomerOffice();
});

document.getElementById("allCustomersWithSalesRepCity_btn").addEventListener("click", function() {
    Customer.AllCustomerOffice_title();
    Customer.AllCustomerOffice();
});

document.getElementById("customersWithLateDeliveries_btn").addEventListener("click", function() {
    Customer.CustomerWithLateDelivery_title();
    Customer.CustomerWithLateDelivery();
});

document.getElementById("customersWithoutPayments_btn").addEventListener("click", function() {
    Customer.CustomersWithoutPayment_title();
    Customer.CustomersWithoutPayment();
});

document.getElementById("customersWithoutOrders_btn").addEventListener("click", function() {
    Customer.CustomersWithoutOrderAndPayment_title();
    Customer.CustomersWithoutOrderAndPayment();
});

document.getElementById("customersWithoutOrdersAndPayments_btn").addEventListener("click", function() {
    Customer.CustomersWithoutOrderAndPayment_title();
    Customer.CustomersWithoutOrderAndPayment();
});

document.getElementById("customersWithOdersButWithoutPayments_btn").addEventListener("click", function() {
    Customer.customersWithOdersButWithoutPayments_title();
    Customer.customersWithOdersButWithoutPayments();
});

document.getElementById("customersPerCountry_btn").addEventListener("click", function() {
    Customer.customersPerCountry_title();
    Customer.customersPerCountry();
});


// EMPLOYEE QUERIES
document.getElementById("employeesWithTheirBoss_btn").addEventListener("click", function() {
    Employee.employeesWithTheirBoss_title();
    Employee.employeesWithTheirBoss();
});

document.getElementById("employeesWithTheBossOfTheirBoss_btn").addEventListener("click", function() {
    Employee.employeesWithTheBossOfTheirBoss_title();
    Employee.employeesWithTheBossOfTheirBoss();
});

document.getElementById("employeesWithoutOffice_btn").addEventListener("click", function() {
    Employee.employeesWithoutOffice_title();
    Employee.employeesWithoutOffice();
});

document.getElementById("employeesWithoutCustomer_btn").addEventListener("click", function() {
    Employee.employeesWithoutCustomer_title()
    Employee.employeesWithoutCustomer();
});

document.getElementById("employeesOfficeWithoutCustomer_btn").addEventListener("click", function() {
    Employee.employeesOfficeWithoutCustomer_title()
    Employee.employeesOfficeWithoutCustomer();
});

document.getElementById("employeesWithoutOfficeAndCustomer_btn").addEventListener("click", function() {
    Employee.employeesWithoutOfficeAndCustomer_title()
    Employee.employeesWithoutOfficeAndCustomer();
})

document.getElementById("employeesWithoutCustomersBoss_btn").addEventListener("click", function() {
    Employee.employeesWithoutCustomersBoss_title();
    Employee.employeesWithoutCustomersBoss();
})


// Office Query
document.getElementById("officesWithClientsInSpecificCity_btn").addEventListener("click", function() {
    Office.officesWithClientsInSpecificCity_form();
    Office.officesWithClientsInSpecificCity_title();
    document.getElementById("searchCityName_btn").addEventListener("click", function() {
        Office.officesWithClientsInSpecificCity();
    })
})

// Payment Query
document.getElementById("averagePaymentByYear_btn").addEventListener("click", function() {
    Payment.averagePaymentByYear_form();
    Payment.averagePaymentByYear_title();
    document.getElementById("searchYearName_btn").addEventListener("click", function() {
        Payment.averagePaymentByYear();
    })
})
