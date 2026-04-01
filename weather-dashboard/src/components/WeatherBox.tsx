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
                // console.log(data);
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

        <div className="bg-gray-900 py-24 sm:py-10 border-2 border-gray-600 mx-8 rounded-md max-w-fit min-h-fit">
            <div className="mx-auto max-w-8xl px-6 lg:px-8">
                <p className="text-6xl text-amber-400 text-center"> {weather.name} </p>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">

                    {weather && (
                        <>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base/7 text-gray-400"> Temperatura: </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl"> {Math.round(weather.main.temp)}°C</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base/7 text-gray-400"> Humedad: </dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{weather.main.humidity}%</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base/7 text-gray-400">Sensación:</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{Math.round(weather.main.feels_like)}°C</dd>
                            </div>
                            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base/7 text-gray-400">Viento:</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{weather.wind.speed} m/s</dd>
                            </div>
                        </>
                    )}
                </dl>
            </div>
        </div>

    );
}

export default WeatherBox;