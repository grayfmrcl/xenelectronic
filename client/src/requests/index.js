import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const requestAPI = axios.create({ baseURL: API_URL });

export default requestAPI;