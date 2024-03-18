import pool from "../models/db.js";

const apiController = {
  getAllEmployees: async (req, res, next) => {
    try {
      const getAllEmployeesQuery =
        "SELECT first_name, last_name, email, title, department.department_name, salaries.salary, salaries.employee_id FROM employees JOIN department ON employees.department_id = department.id JOIN salaries ON salaries.employee_id = employees.id;";
      const data = await pool.query(getAllEmployeesQuery, []);
      res.locals.employees = data.rows;
      return next();
    } catch (error) {
      return next({
        log: `Error occured in apiController.getAllEmployees middleware: ${error}`,
        status: 400,
        message: { error: "Unable to get all employees." },
      });
    }
  },

  getByEmployeeId: async (req, res, next) => {
    const { employeeid } = req.params;
    try {
      const getByEmployeeIdQuery =
        "SELECT first_name, last_name, email, title, department.department_name, salaries.salary, salaries.employee_id FROM employees JOIN department ON employees.department_id = department.id JOIN salaries ON salaries.employee_id = employees.id WHERE employees.id = $1;";
      const data = await pool.query(getByEmployeeIdQuery, [employeeid]);
      res.locals.employee = data.rows;
      return next();
    } catch (error) {
      return next({
        log: `Error occured in apiController.getEmployeeById middleware: ${error}`,
        status: 400,
        message: { error: "Unable to get employee." },
      });
    }
  },

  addEmployee: async (req, res, next) => {
    const { id, first_name, last_name, email, title, department_id } = req.body;
    try {
      //const sequenceQuery = 'CREATE SEQUENCE employees_id_seq;'
      const addEmployeeQuery =
        "INSERT INTO employees (id, first_name, last_name, email, title, department_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;";

      // await pool.query(sequenceQuery, []);
      const data = await pool.query(addEmployeeQuery, [
        id,
        first_name,
        last_name,
        email,
        title,
        department_id,
      ]);
      res.locals.newEmployee = data.rows;
      return next();
    } catch (error) {
      return next({
        log: `Error occured in apiController.addEmployee middleware: ${error}`,
        status: 400,
        message: { error: "Unable to add employee." },
      });
    }
  },

  addSalary: async (req, res, next) => {
    const { id, salary } = req.body;
    try {
      const addSalaryQuery =
        "INSERT INTO salaries (employee_id, salary) VALUES ($1, $2) RETURNING *;";
      const data = await pool.query(addSalaryQuery, [id, salary]);
      res.locals.newSalary = data.rows;
      return next();
    } catch (error) {
      return next({
        log: `Error occured in apiController.addSalary middleware: ${error}`,
        status: 400,
        message: { error: "Unable to add salary." },
      });
    }
  },

  deleteSalary: async (req, res, next) => {
    const { id } = req.params;
    try {
      const deleteQuery = "DELETE FROM salaries WHERE employee_id = $1";
      const data = await pool.query(deleteQuery, [id]);
      console.log(data);
      return next();
    } catch (error) {
      return next({
        log: `Error occured in apiController.deleteSalary middleware: ${error}`,
        status: 400,
        message: { error: "Unable to delete salary." },
      });
    }
  },

  deleteEmployee: async (req, res, next) => {
    const { id } = req.params;
    try {
      const deleteQuery = "DELETE FROM employees WHERE id = $1";
      const data = await pool.query(deleteQuery, [id]);
      res.locals.deleted = data.rows;
      return next();
    } catch (error) {
      return next({
        log: `Error occured in apiController.deleteEmployee middleware: ${error}`,
        status: 400,
        message: { error: "Unable to delete employee." },
      });
    }
  },
};

export default apiController;
