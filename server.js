const inquirer = require('inquirer');
const db = require('./db'); 

// view departments
async function getAllDepartments() {
  try {
    const [rows, fields] = await db.query('SELECT * FROM department');
    return rows;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// view roles
async function getAllRoles() {
  try {
    const [rows, fields] = await db.query('SELECT * FROM role');
    return rows;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// view employees
async function getAllEmployees() {
  try {
    const [rows, fields] = await db.query('SELECT * FROM employee');
    return rows;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// add department
async function addDepartment() {
  const department = await inquirer.prompt({
    type: 'input',
    name: 'name',
    message: 'Enter the name of the department:',
  });

  try {
    await db.query('INSERT INTO department (name) VALUES (?)', [department.name]);
    console.log('Department added successfully!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// add a role
async function addRole() {
  const roleDetails = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title of the role:',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary for the role:',
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'Enter the department ID for the role:',
    },
  ]);

  try {
    await db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [
      roleDetails.title,
      roleDetails.salary,
      roleDetails.department_id,
    ]);

    console.log('Role added successfully!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}


// Function to add an employee
async function addEmployee() {
  // employee details
  const employeeDetails = await inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'Enter the first name of the new employee:',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'Enter the last name of the new employee:',
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'Enter the role ID for the new employee:',
    },
    
  ]);

  try {
    await db.query('INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)', [
      employeeDetails.first_name,
      employeeDetails.last_name,
      employeeDetails.role_id,
    ]);

    console.log('Employee added successfully!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// inquirer questions
async function startApp() {
  let keepRunning = true;

  while (keepRunning) {
    const { action } = await inquirer.prompt({
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles', 
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Exit', 
      ],
    });

  // Call the corresponding function based on user's choice
  switch (action) {
    case 'View all departments':
      const departments = await getAllDepartments();
      console.table(departments);
      break;
    case 'View all roles':
      const roles = await getAllRoles();
      console.table(roles);
      break;
    case 'View all employees':
      const employees = await getAllEmployees();
      console.table(employees);
      break;
    case 'Add a department':
      await addDepartment();
      break;
    case 'Add a role':
      await addRole();
      break;
    case 'Add an employee':
      await addEmployee();
      break;
    // Add cases for other actions
  }
}};



startApp();