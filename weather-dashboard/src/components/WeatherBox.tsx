import { useEffect, useState } from "react";
import api from "../services/ApiService";

interface WeatherBoxProps {
    prop_1: string
}

const WeatherBox: React.FC<WeatherBoxProps> = ({ prop_1 }) => {
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                const data = await api.getCurrentWeather("Quito");
                setWeather(data);
            } catch (error) {
                setError("Cannot access to weather data");
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [])

    if (loading) return <p className="text-white text-2xl text-center pt-2">Loading weather data...</p>
    if (error) return <p className="text-red-500 text-2xl text-center pt-2">{error}</p>;

    return (

        <div className="bg-gray-900 py-24 sm:py-10 border-2 border-gray-600 mx-8 rounded-md">
            <div className="min-h-dvh">
                {weather && (
                    <div className="card">
                        <h1>{weather.name}</h1>
                        <p>Temperatura: {Math.round(weather.main.temp)}°C</p>
                        <p>Humedad: {weather.main.humidity}%</p>
                        <p>Sensación: {Math.round(weather.main.feels_like)}°C</p>
                        <p>Viento: {weather.wind.speed} m/s</p>
                    </div>
                )}
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base/7 text-gray-400">Transactions every 24 hours</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">44 million</dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base/7 text-gray-400">Assets under holding</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">$119 trillion</dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base/7 text-gray-400">New users annually</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">46,000</dd>
                    </div>
                </dl>
            </div>
        </div>

    );
}

export default WeatherBox;