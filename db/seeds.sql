INSERT INTO department (id, name) VALUES
  (2, 'Engineering'),
  (3, 'Marketing'),
  (4, 'Sales');


INSERT INTO role (id, title, salary, department_id) VALUES
  (1, 'Software Engineer', 80000, 1),
  (2, 'Marketing Specialist', 60000, 2),
  (3, 'Sales Representative', 70000, 3);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'John', 'Doe', 1, NULL),
  (2, 'Jane', 'Smith', 2, 1),
  (3, 'Bob', 'Johnson', 3, 1);