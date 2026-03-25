import axios, { Axios } from "axios";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const baseURL = import.meta.env.VITE_OPENWEATHER_API_URL;

class ApiService {

    baseUrl: string;
    apiKey: string;
    units: string;
    lang: string;
    private api: any;

    constructor(baseUrl: string, apiKey: string, units: string = 'metric', lang: string = 'es') {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
        this.units = units;
        this.lang = lang;
        this.createConnection();
    }

    async createConnection(): Promise<void> {
        this.api = axios.create({
            baseURL: this.baseUrl,
            params: {
                appid: this.apiKey,
                units: this.units,
                lang: this.lang
            }
        })
    }

    async getCurrentWeather(city: string) {
        try {
            const response = await this.api.get("/weather", { params: { q: city } });
            return response.data;
        } catch (error) {
            console.error("Request error: ", error);
            throw error;
        }
    }
}

let api = new ApiService(baseURL, apiKey)

export default api;