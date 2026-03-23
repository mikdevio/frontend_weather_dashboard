import axios from "axios";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const baseURL = import.meta.env.VITE_OPENWEATHER_API_URL;


const api = axios.create({
    baseURL: baseURL,
    params: {
        appid: apiKey,
        units: 'metric',
        lang: 'es'
    }
})

export default api;