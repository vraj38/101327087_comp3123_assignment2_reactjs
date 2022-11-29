import React from 'react';
import { FormControl, FormGroup, InputLabel, Input, Typography, styled } from '@mui/material';

const AddEmployee = () => {
  return (
    <FormGroup>
        <Typography variant='h3'>Add Employee</Typography>
        <FormControl>
            <InputLabel>First Name</InputLabel>
            <Input />
        </FormControl>
        <FormControl>
            <InputLabel>Last Name</InputLabel>
            <Input />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input />
        </FormControl>
    </FormGroup>
  )
}

export default AddEmployee
