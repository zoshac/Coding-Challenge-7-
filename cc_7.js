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


// Task 4 Product Shipping Cost Calculation 
const calculateShippingCost = (weight, location, expidited = false) => {
    let shippingCost;

    if (location === "USA") {
        shippingCost = 5 + (weight * 0.5); // $5 per 0.5lb
    } else if (location === "Canada") {
        shippingCost = 10 + (weight * 0.7); // $10 per 0.7lb
    } else {
        console.log("Invalid Location!");
        return;
    }
    if (expidited) {
        shippingCost += 10; // $10 extra fpr expidited shipping 
    }
    console.log(`Shipping Cost: $${shippingCost.toFixed(2)}`);
}; 

// Test Cases 
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"


// Task 5 Business Loan Interest Calculation 

const calculateLoanInterest = (principal, rate, years) => {
    let interest = principal * rate * years;
    return interest;
};

// function to calculate loan interest 

// Test Cases 
let interest1 = calculateLoanInterest(1000, 0.05, 3); 
console.log(`Total Interest: $${interest1.toFixed(2)}`);

let interest2 = calculateLoanInterest(5000, 0.07, 5);
console.log(`Total Interest: $${interest2.toFixed(2)}`);


// Task 6 Filtering from High-Value Transactions 
const transactions = [500, 1200, 2500, 800, 1500, 300] // Transactions 
const highValueTransactions = transactions.filter(amount => amount > 1000); // Function to filter transactions over 1000
console.log(highValueTransactions);


// Task 7 Budget Tracker 
const createBudgetTracker = () => {
    let balance = 0;

    return (expense) => {
        balance += expense; 
        console.log(`Current Balance: $${balance.toFixed(2)}`);
    };
};

// Test Data 
let budget = createBudgetTracker();
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"