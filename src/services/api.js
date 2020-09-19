import axios from 'axios';


const api = axios.create({
    baseURL:'https://sentim-api.herokuapp.com',


});

export default api;