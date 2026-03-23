// 1. Interfaz Principal
export interface WeatherResponse {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: CurrentWeather;
    daily: DailyWeather[];
    alerts?: WeatherAlert[];
}

// 2. Datos compartidos (Clima: lluvia, nubes, iconos)
export interface WeatherCondition {
    id: number;
    main: string;
    description: string;
    icon: string;
}

// 3. Clima Actual (General)
export interface CurrentWeather {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    weather: WeatherCondition[];
}

// 4. Pronóstico Diario
export interface DailyWeather {
    dt: number;
    sunrise: number;
    sunset: number;
    summary: string;
    temp: DailyTemp;
    feels_like: DailyFeelsLike;
    pressure: number;
    humidity: number;
    weather: WeatherCondition[];
    pop: number; // Probabilidad de precipitación (0 a 1)
    rain?: number; // Volumen de lluvia en mm
    uvi: number;
}

// 5. Detalles de Temperatura Diaria
export interface DailyTemp {
    morn: number;
    day: number;
    eve: number;
    night: number;
    min: number;
    max: number;
}

export interface DailyFeelsLike {
    morn: number;
    day: number;
    eve: number;
    night: number;
}

// 6. Alertas (Opcional pero recomendado)
export interface WeatherAlert {
    sender_name: string;
    event: string;
    start: number;
    end: number;
    description: string;
}