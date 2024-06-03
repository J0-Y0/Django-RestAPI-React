import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000/api";

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    responseType: 'json',
    headers: {
        'Authorization': localStorage.getItem('access_token')
            ? "JWT " + localStorage.getItem('access_token')
            : null,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default axiosInstance;
