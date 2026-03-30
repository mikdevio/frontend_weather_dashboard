import axios, { Axios } from "axios";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
const baseWeatherURL = import.meta.env.VITE_OPENWEATHER_API_URL;
const baseGeoURL = import.meta.env.VITE_OPENWEATHER_GEO_URL;

class ApiService {

    baseWeatherUrl: string;
    baseGeoURL: string;
    apiKey: string;
    units: string;
    lang: string;
    private apiWeather: any;
    private apiGeocoding: any;

    constructor(baseWeatherUrl: string, baseGeoUrl: string, apiKey: string, units: string = 'metric', lang: string = 'es') {
        this.baseWeatherUrl = baseWeatherUrl;
        this.baseGeoURL = baseGeoUrl;
        this.apiKey = apiKey;
        this.units = units;
        this.lang = lang;
        this.createWeatherConnection();
        this.createGeoConnection();
    }

    async createWeatherConnection(): Promise<void> {
        this.apiWeather = axios.create({
            baseURL: this.baseWeatherUrl,
            params: {
                appid: this.apiKey,
                units: this.units,
                lang: this.lang
            }
        })
    }

    async createGeoConnection(): Promise<void> {
        this.apiGeocoding = axios.create({
            baseURL: this.baseGeoURL,
            params: {
                appid: this.apiKey,
                units: this.units,
                lang: this.lang
            }
        })
    }

    async getCurrentWeather(city: string) {
        try {
            const location_res = await this.apiGeocoding.get("", { params: { q: city }, limit: 1 })
            const data_location = location_res.data[0];
            // console.log(data_location);
            const res_weather = await this.apiWeather.get("", {
                params: {
                    lat: data_location.lat,
                    lon: data_location.lon
                }
            });
            return res_weather.data;
        } catch (error) {
            console.error("Request error: ", error);
            throw error;
        }
    }

    async getCityLocation(city: string) {
        try {
            const response = await this.apiGeocoding.get('', { params: { q: city }, limit: 1 })
            return response.data;
        } catch (error) {
            console.error("Request error: ", error);
            throw error;
        }
    }
}

let api = new ApiService(baseWeatherURL, baseGeoURL, apiKey)

export default api;