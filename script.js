// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let keepAsking=true
  const employees = [];
  while (keepAsking){
    // prompt for first name, store it
    let employee={};
    const firstNamePrompt = prompt("Please enter employee's first name");
    //if (firstName) {employee.fname=firstName;}
    //prompt for last name, store it
    const lastNamePrompt = prompt("Please enter employee's last name");
    //if (lastName) {employee.lname=lastName;}
    //prompt for salary, store it
    const salaryPrompt = prompt("Please enter employee's salary");
    //if (salary) {employee.sal=salary}
    //ask if i wanna add a new employee
    if (firstNamePrompt && lastNamePrompt && salaryPrompt) {
      employee.firstName=firstNamePrompt;
      employee.lastName=lastNamePrompt;
      if(isNaN(salaryPrompt)){
        employee.salary=0;
      } else employee.salary=Number(salaryPrompt)
      
    }
    //if yes, repeat
    employees.push(employee)
    let continueAsking = confirm ("Do you want to add a new employee?")
    if (!continueAsking) return employees

  }

  //else display employees alphabetically by last name
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
   let totalSalary=0
   let countSalary=0
   for (let sal_i of employeesArray){
   totalSalary+=sal_i.salary
   countSalary++
   }
   console.log("The average salary of your employees is: " +(totalSalary/countSalary))
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomEmployee = employeesArray[Math.floor(Math.random() * employeesArray.length)];
console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
