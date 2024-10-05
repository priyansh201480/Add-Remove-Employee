// Array to hold employee data
let employees = [];
let employeeId = 1; // Automatically incrementing ID

document.getElementById("add-employee-btn").addEventListener("click", addEmployee);

function addEmployee() {
  // Get form values
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();
  
  const messageDiv = document.getElementById("message");

  
  if (name === "" || profession === "" || age === "") {
    messageDiv.textContent = "Error: All fields are required!";
    messageDiv.className = "error";
    return;
  }


  const newEmployee = {
    id: employeeId++,
    name,
    profession,
    age: parseInt(age)
  };
  
  employees.push(newEmployee);

  // Clear form
  document.getElementById("employee-form").reset();

  // Show success message
  messageDiv.textContent = "Success: Employee added!";
  messageDiv.className = "success";

  displayEmployees();
}

function displayEmployees() {
  const employeeListDiv = document.getElementById("employee-list");
  employeeListDiv.innerHTML = "";

  if (employees.length === 0) {
    employeeListDiv.innerHTML = "<p>No employees added.</p>";
    return;
  }

  employees.forEach((employee) => {
    const employeeDiv = document.createElement("div");
    employeeDiv.className = "employee-item";
    employeeDiv.innerHTML = `
      <p>ID: ${employee.id}</p>
      <p>Name: ${employee.name}</p>
      <p>Profession: ${employee.profession}</p>
      <p>Age: ${employee.age}</p>
      <button onclick="deleteEmployee(${employee.id})">Delete</button>
    `;
    employeeListDiv.appendChild(employeeDiv);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  displayEmployees();
}
