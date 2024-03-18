import { Router } from "express";
// const { Router } = require('express');
//const apiController = require('../controllers/apiController');
import apiController from "../controller/apiController.js";

const apiRouter = Router();

// This route gets all employee data from the database
apiRouter.get("/", apiController.getAllEmployees, (req, res) => {
  return res.status(200).json(res.locals.employees);
});

//This route gets an employee by id from the database
apiRouter.get(
  "/getbyid/:employeeid",
  apiController.getByEmployeeId,
  (req, res) => {
    return res.status(200).json(res.locals.employee);
  }
);

//This route adds an employee to the database
apiRouter.post(
  "/add",
  apiController.addEmployee,
  apiController.addSalary,
  (req, res) => {
    return res.status(200).json({
      employee: res.locals.newEmployee,
    });
  }
);

// This route deletes an employee from the database
apiRouter.delete(
  "/delete/:id",
  apiController.deleteSalary,
  apiController.deleteEmployee,
  (req, res) => {
    return res.status(200).json(res.locals.deleted);
  }
);
// module.exports = apiRouter;
export default apiRouter;
