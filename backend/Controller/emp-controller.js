import Employee from '../Schema/emp-schema.js';

export const addEmployee = async (request, response) => {

    const emp = request.body;
    const newEmp = new Employee(emp);

    try {
        await newEmp.save();
        response.status(201).json(newEmp);

    } catch (error) {
        response.status(409).json({message: error.message});
    }
}