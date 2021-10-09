import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:44304/'
  });
  export default instance;