import express from 'express';
import { addEmployee } from '../Controller/emp-controller.js';

const router = express.Router();

router.post('/add', addEmployee)

export default router