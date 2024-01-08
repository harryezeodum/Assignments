let employees = [];

function Employee(name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.printEmployeeForm = function() {
  console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: $" + this.salary + "/hour," + " Status: " + this.status);
}

let employee1 = new Employee("Harry", "Software Developer", 100, "Part Time");
employee1.printEmployeeForm();
let employee2 = new Employee("Ezeodum", "Banker", 25, "Contract");
employee2.printEmployeeForm();
let employee3 = new Employee("Nnaemeka", "Driver", 15);
employee3.printEmployeeForm();

employees.push(employee1, employee2, employee3);

const name = "Ben";
const age = 24;
const dateOfBirth = "feb";

const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
let currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
    console.log(message);
  }else {
    message = statuses[i].response;
    console.log(message);
  }
}



