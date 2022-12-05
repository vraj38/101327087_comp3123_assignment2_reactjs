const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const employeeModel = require('../models/Employee');

//GET -  /api/emp/employees - 200 - Get all employee list
router.get('/employees', async(req, res) => {
    try{
        const employee = await employeeModel.find();
        res.status(200).json(employee)
    }catch (error) {
        res.status(400).json({message: "User not found"});                                                                    
    }
});

//POST - /api/emp/employees - 201 - User creates new employee
router.post('/employees',async(req,res) =>{
    const employee = new employeeModel(req.body);
    try{
        await employee.save();
        res.status(201).json(employee);
    }catch(error){
        res.status(400).json({message: "User not created"});
    }
});

//GET - /api/emp/employees/{eid} - 200 - Get employee details by ID
router.get('/employees/:eid', async (req, res) => {
    try {
        res.send(await employeeModel.findById(req.params.eid, req.body));
        res.status(200).json(employee)
    } catch (error) {
        res.status(400).send({message: "Error finding employee by ID"});
    }
});

//PUT - /api/emp/employees/{eid} - 200 - User Updates employee detail
router.put('/employees/:eid', async (req, res) => {
    if(!req.body.content){
        return res.status(400).json({message: "Employee can not be empty"})
    }else{
        await employeeModel.findByIdAndUpdate(request.params.eid,req.body.content);
        res.json({message: "User updated successfully"});
    }
});

//DELETE - /api/emp/employees?eid - 204 - delete employee by its id
router.delete('/employees/:eid', async (req, res) => {
    try{
        await employeeModel.findByIdAndDelete(req.params.eid);
        res.json("The employee has been deleted");
    }catch(error){
        res.status(400).json({message: "Employee not found to delete"});
    }
});

module.exports = router;