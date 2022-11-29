import axios from 'axios';

const URL = 'http://localhost:8081';

export const addEmployee = async(data) => {

    try {
       return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log('Error while calling add Employee API', error);
    }
}