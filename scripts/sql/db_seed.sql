-- Insert sample employees
INSERT INTO employees (id, first_name, last_name, email, title, department_id) VALUES
                      (1, 'John', 'Smith', 'johnsmith@gmail.com', 'accountant'),
                      (2, 'Jane', 'Doe', 'janedoe@gmail.com', 'engineer');

INSERT INTO department (id, department_name) VALUES
                       (1, 'accounting'),
                       (2, 'engineering');

INSERT INTO salaries   (id, employee_id, salary) VALUES
                       (1, 1, 200),
                       (2, 2, 200);

INSERT INTO historical_salaries (id, employee_id, salary, effective_date) VALUES
                                (1, 1, 200, 100, 02-10-2021),
                                (1, 1, 200, 100, 02-10-2021);
