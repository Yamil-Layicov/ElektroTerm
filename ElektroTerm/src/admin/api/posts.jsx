import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://api.elektroterm.az/api',
});

export default instance;