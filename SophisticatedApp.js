/* 
Filename: SophisticatedApp.js
Content: A sophisticated, elaborate, and complex JavaScript code.
*/

// Object representation of a Customer
class Customer {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  isAdult() {
    return this.age >= 18;
  }
}

// Array of Customers
const customers = [
  new Customer("John", "Doe", 25),
  new Customer("Jane", "Smith", 17),
  new Customer("David", "Johnson", 33),
  new Customer("Emma", "Davis", 21),
];

// Function to filter out adult customers
function getAdultCustomers(customers) {
  const adultCustomers = customers.filter((customer) => customer.isAdult());
  return adultCustomers;
}

// Function to sort customers by age in descending order
function sortCustomersByAge(customers) {
  return customers.sort((customerA, customerB) => customerB.age - customerA.age);
}

// Function to display customer information
function displayCustomerInfo(customer) {
  console.log(`Name: ${customer.getFullName()}`);
  console.log(`Age: ${customer.age}`);
  console.log("-------------------------");
}

// Get adult customers
const adultCustomers = getAdultCustomers(customers);

// Sort adult customers by age
const sortedCustomers = sortCustomersByAge(adultCustomers);

// Display customer information
sortedCustomers.forEach((customer) => displayCustomerInfo(customer));

// Output:
// Name: David Johnson
// Age: 33
// -------------------------
// Name: John Doe
// Age: 25
// -------------------------
// Name: Emma Davis
// Age: 21
// -------------------------