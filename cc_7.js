// Task 1 Customer Invoice Calculation 

function calculateInvoice(subtotal, taxRate, discount){
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`)
}

// Test Cases 

calculateInvoice(400, 0.05, 7); // Expected output $413
calculateInvoice(750, 0.2, 4); // Expected output $896

// Task 2 Employee Hourly Wage 

const calculateHourlyWage = function(salary, hoursWorkedPerWeek) {
    let hourlyWage = salary / (hoursWorkedPerWeek * 52); 
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);
}; 

// Test Cases 
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"
