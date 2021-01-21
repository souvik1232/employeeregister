const express = require('express');
const router = express.Router()
const EmpController = require('../controller/controller');
console.log("router running");
router.post('/register' , EmpController.create);
router.get('/getEmployeeList',EmpController.getEmployeeList)
router.put('/update/:id',EmpController.updateEmployee)
router.delete('/delete/:id',EmpController.deleteEmployee)
module.exports = router;