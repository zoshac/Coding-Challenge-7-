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


// Task 3 Customer Loylty Discount 
const calculateLoyaltyDiscount = (amount, years) => {
    let discount = 0;
    if (years >= 5) {
        discount = 0.15; // 15% discount will be applied
    } else if (years >= 3) {
        discount = 0.10; // 10% discount will be applied 
    } else {
        discount = 0.05; // 5% discount will be applied 
    }
    let discountedAmount = amount - (amount * discount);
    console.log(`Discounted Amount: $${amount.toFixed(2)}`);
};

// Test Data 
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"