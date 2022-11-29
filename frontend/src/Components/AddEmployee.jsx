import React, {useState} from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from '@mui/material';
import { addEmployee } from '../Services/api';

const initialValue = {
    firstname: '',
    lastname: '',
    email: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% auto 0 auto;
`

const AddEmployee = () => {

    const [emp, setEmp] = useState(initialValue);

    const onValueChange = (e) => {
        setEmp({...emp, [e.target.name]: e.target.value});
    }

    const addEmployeeDetails = async () => {
        await addEmployee(emp);
    }


  return (
    <Container>
    <FormGroup>
        <Typography variant='h3'>Add Employee</Typography>
        <div className='padding'></div>
        <FormControl>
            <InputLabel>First Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='firstname' id="my-input"/>
        </FormControl>
        <div className='padding'></div>
        <FormControl>
            <InputLabel>Last Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='lastname' id="my-input"/>
        </FormControl>
        <div className='padding'></div>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='email' id="my-input"/>
        </FormControl>
        <div className='padding'></div>
        <FormControl>
            <Button variant="contained" onClick={() => addEmployeeDetails()}>Submit</Button>
        </FormControl>
    </FormGroup>
    </Container>
  )
}

export default AddEmployee
