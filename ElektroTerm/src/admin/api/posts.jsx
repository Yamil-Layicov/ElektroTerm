import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://res.hill.az/api',
});

export default instance;