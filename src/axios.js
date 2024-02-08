import axios from "axios";
 

const instance = axios.create({
    baseURL:'http://localhost:6000/api/v1/register',
}) 
export default instance;