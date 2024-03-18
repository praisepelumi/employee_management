INSERT INTO department (id, department_name) VALUES
                       (1, 'accounting'),
                       (2, 'engineering');

INSERT INTO employees (id, first_name, last_name, email, title, department_id) VALUES
                      (1, 'John', 'Smith', 'johnsmith@gmail.com', 'accountant', 1),
                      (2, 'Jane', 'Doe', 'janedoe@gmail.com', 'engineer', 2);


INSERT INTO salaries   (employee_id, salary) VALUES
                       (1,'$95000.00'),
                       (2,'$100000.00');

INSERT INTO historical_salaries (id, employee_id, salary, effective_date) VALUES
                                (1, 1, 125000,'2024-03-16'),
                                (2, 2, 150000, '2022-01-24');

