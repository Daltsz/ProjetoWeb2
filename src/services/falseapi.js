import axios from 'axios';


const apifake = axios.create({
    baseURL:'https://reqres.in/',


});

export default apifake;