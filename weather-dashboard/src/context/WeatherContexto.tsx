import { createContext, useState, useContext, type ReactNode } from 'react';
import type { WeatherResponse } from '../types/Responses';

interface WeatherContextType {
    weatherData: WeatherResponse | null;
    setWeatherData: (data: WeatherResponse | null) => void;
}

const WeatherDataContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherDataProvider = ({ children }: { children: ReactNode }) => {
    const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

    return (
        <WeatherDataContext.Provider value={{ weatherData, setWeatherData }
        }>
            {children}
        </WeatherDataContext.Provider>
    );
};

export const useWeatherData = () => {
    const context = useContext(WeatherDataContext);
    if (!context) {
        throw new Error('useWeatherData should be used inside WeatherDataProvider');
    }
    return context;
}