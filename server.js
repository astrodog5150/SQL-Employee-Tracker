const inquirer = require('inquirer');
const db = require('./db'); 

async function getAllDepartments() {
  try {
    const [rows, fields] = await db.query('SELECT * FROM department');
    return rows;
  } catch (error) {
    console.error('Error:', error.message);
  }
}


async function getAllRoles() {
  try {
    const [rows, fields] = await db.query('SELECT * FROM role');
    return rows;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Inquirer prompt to choose action
async function startApp() {
  const { action } = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'View all departments',
      'View all roles', 
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
    // Add cases for other actions
  }
}


startApp();