import * as Employee from "../entities/Employee.js";
import * as Customer from "../entities/Customer.js";
import * as Office from "../entities/Office.js";
import * as Payment from "../entities/Payment.js";
import * as Order from "../entities/Order.js";
import * as Product from "../entities/Product.js";

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

document.getElementById("CountByCityLikeIgnoreCase_btn").addEventListener("click", function() {
    Customer.CountByCityLikeIgnoreCase_form();
    Customer.CountByCityLikeIgnoreCase_title();
    document.getElementById("searchCityByName_btn").addEventListener("click", function() {
        Customer.CountByCityLikeIgnoreCase();
    })
})

document.getElementById("countCustomers_btn").addEventListener("click", function() {
    Customer.countCustomers_title();
    Customer.countCustomers();
});

document.getElementById("totalCustomersByCity_btn").addEventListener("click", function() {
    Customer.totalCustomersByCity_form();
    Customer.totalCustomersByCity_title();
    document.getElementById("searchTotalCustomersByName_btn").addEventListener("click", function() {
        Customer.totalCustomersByCity();
    })
})
document.getElementById("totalCustomersWithoutEmployee_btn").addEventListener("click", function() {
    Customer.totalCustomersWithoutEmployee_title();
    Customer.totalCustomersWithoutEmployee();
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

document.getElementById("totalCustomersPerSalesRep_btn").addEventListener("click", function() {
    Employee.totalCustomersPerSalesRep_title();
    Employee.totalCustomersPerSalesRep();
})

document.getElementById("findCompanyBoss_btn").addEventListener("click", function() {
    Employee.findCompanyBoss_title();
    Employee.findCompanyBoss();
})

document.getElementById("countEmployees_btn").addEventListener("click", function() {
    Employee.countEmployees_title();
    Employee.countEmployees();
})


// Office Query
document.getElementById("officesWithClientsInSpecificCity_btn").addEventListener("click", function() {
    Office.officesWithClientsInSpecificCity_form();
    Office.officesWithClientsInSpecificCity_title();
    document.getElementById("searchCityName_btn").addEventListener("click", function() {
        Office.officesWithClientsInSpecificCity();
    })
})

document.getElementById("findOfficeCodesAndCities_btn").addEventListener("click", function() {
    Office.findOfficeCodesAndCities_title();
    Office.findOfficeCodesAndCities();
})

// Payment Query
document.getElementById("averagePaymentByYear_btn").addEventListener("click", function() {
    Payment.averagePaymentByYear_form();
    Payment.averagePaymentByYear_title();
    document.getElementById("searchYearName_btn").addEventListener("click", function() {
        Payment.averagePaymentByYear();
    })
})

document.getElementById("paymentsByCustomer_btn").addEventListener("click", function() {
    Payment.paymentsByCustomer_title();
    Payment.paymentsByCustomer();
})

document.getElementById("paymentTotalPerYear_btn").addEventListener("click", function() {
    Payment.paymentTotalPerYear_title();
    Payment.paymentTotalPerYear();
})

document.getElementById("bussinessInvoicing_btn").addEventListener("click", function() {
    Payment.bussinessInvoicing_title();
    Payment.bussinessInvoicing();
})

document.getElementById("bussinessInvoicingPerProduct_btn").addEventListener("click", function() {
    Payment.bussinessInvoicingPerProduct_title();
    Payment.bussinessInvoicingPerProduct();
})

document.getElementById("bussinessInvoicingByProductCode_btn").addEventListener("click", function() {
    Payment.bussinessInvoicingByProductCode_form();
    Payment.bussinessInvoicingByProductCode_title();
    document.getElementById("searchYearCode_btn").addEventListener("click", function() {
        Payment.bussinessInvoicingByProductCode();
    })
})

document.getElementById("findPaymentsYearMethod_btn").addEventListener("click", function() {
    Payment.findPaymentsYearMethod_form();
    Payment.findPaymentsYearMethod_title();
    document.getElementById("searchItems_btn").addEventListener("click", function() {
        Payment.findPaymentsYearMethod();
    })
})

document.getElementById("findClientCodesPaymentYear_btn").addEventListener("click", function() {
    Payment.findClientCodesPaymentYear_form();
    Payment.findClientCodesPaymentYear_title();
    document.getElementById("searchYearCode_btn").addEventListener("click", function() {
        Payment.findClientCodesPaymentYear();
    })
})



// Order Query
document.getElementById("orderStatus_btn").addEventListener("click", function() {
    Order.orderStatus_title();
    Order.orderStatus();
})

document.getElementById("lateOrders_btn").addEventListener("click", function() {
    Order.lateOrders_title();
    Order.lateOrders();
})

document.getElementById("ordersRejectedInYear_btn").addEventListener("click", function() {
    Order.ordersRejectedInYear_form();
    Order.ordersRejectedInYear_title();
    document.getElementById("searchYearName_btn2").addEventListener("click", function() {
        Order.ordersRejectedInYear();
    })
})

document.getElementById("orderByStatus_btn").addEventListener("click", function() {
    Order.orderByStatus_title();
    Order.orderByStatus();
})





















































//Product Query
document.getElementById("totalProductsByOrder_btn").addEventListener("click", function() {
    Product.totalProductsByOrder_title();
    Product.totalProductsByOrder();
})
document.getElementById("productsWithoutOrder_btn").addEventListener("click", function() {
    Product.productsWithoutOrder_title();
    Product.productsWithoutOrder();
})
document.getElementById("productsWithoutOrderDescription_btn").addEventListener("click", function() {
    Product.productsWithoutOrderDescription_title();
    Product.productsWithoutOrderDescription();
})
document.getElementById("varietyOfProductsInOrders_btn").addEventListener("click", function() {
    Product.varietyOfProductsInOrders_title();
    Product.varietyOfProductsInOrders();
})
document.getElementById("bestSellers_btn").addEventListener("click", function() {
    Product.bestSellers_title();
    Product.bestSellers();
})