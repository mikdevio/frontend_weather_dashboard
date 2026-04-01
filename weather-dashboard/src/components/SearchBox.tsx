import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

import { useWeatherData } from "../context/WeatherContexto"
import api from "../services/ApiService";

interface SearchBoxProps {
    prop_1: string,
}

const SearchBox: React.FC<SearchBoxProps> = ({ prop_1 }) => {

    const [cityName, setCityName] = useState<string>("");
    const { setWeatherData } = useWeatherData()


    const fetchWeatherData = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Requesting API...")
        try {
            const data = await api.getCurrentWeather(cityName);
            // console.log(data);
            setWeatherData(data);
        } catch (error) {
            console.log("Cannot access to weather data");
        }
    };


    return (
        <form className="mx-auto px-4 sm:px-6 lg:px-8 min-w-4xl py-2" onSubmit={fetchWeatherData}>
            <label className="block py-2 text-2xl leading-6 font-bold text-white" htmlFor="search-box">Search a place:</label>
            <div className="flex items-center rounded-md pl-1 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500 bg-gray-800">
                <MagnifyingGlassCircleIcon className="size-8 text-white h-full" />
                <input type="text" name="search-box" id="search-box" className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-3 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-base/8" value={cityName} onChange={(e) => setCityName(e.target.value)} />
                <button className="ml-2 px-2 py-2 text-white bg-indigo-400 rounded-md" type="submit">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchBox;