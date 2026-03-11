# 🌦️ Weather Dashboard - React + TypeScript

Un dashboard de clima moderno y robusto diseñado para demostrar el manejo profesional de datos externos utilizando **TypeScript**. Este proyecto consume la API de OpenWeatherMap y se centra en la eliminación de errores mediante un tipado estricto de las respuestas.

---

## 🚀 Características

- **Búsqueda en Tiempo Real:** Consulta el clima de cualquier ciudad del mundo.
- **Seguridad de Tipos (Type Safety):** Interfaces detalladas para las respuestas de la API, evitando el uso de `any`.
- **UI Dinámica:** Visualización de temperatura, humedad, viento y condiciones climáticas con iconos oficiales.
- **Gestión de Errores:** Manejo controlado de fallos en la petición (ciudades no encontradas o errores de red).

## 🛠️ Stack Tecnológico

- **React 18** (Vite)
- **TypeScript**
- **Axios** (Cliente HTTP)
- **CSS Modules / Tailwind CSS**

---

## 🧬 El Corazón del Proyecto: Tipado de API

El objetivo principal es evitar errores comunes al acceder a propiedades de objetos complejos. Aquí un ejemplo de cómo se estructuran los datos:

```typescript
// src/types/weather.ts

export interface WeatherData {
  coord: { lon: number; lat: number };
  weather: WeatherDetails[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: { speed: number; deg: number };
  name: string;
  cod: number;
}

export interface WeatherDetails {
  id: number;
  main: string;
  description: string;
  icon: string;
}
```
📦 Instalación
1. Clona este repositorio:

```bash
git clone [https://github.com/tu-usuario/weather-dashboard-ts.git](https://github.com/tu-usuario/weather-dashboard-ts.git)
cd weather-dashboard-ts
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura tu API Key:
Crea un archivo .env en la raíz y añade tu clave de OpenWeatherMap:
```.env
VITE_WEATHER_API_KEY=tu_api_key_aqui
```

4. Inicia el proyecto:
```bash
npm run dev
```

📂 Estructura de Carpetas
```plaintext
src/
├── api/           # Configuración de Axios (baseUrl, interceptores)
├── components/    # Componentes (SearchBar, WeatherCard, ErrorMessage)
├── hooks/         # Custom hooks (useWeather)
├── types/         # Definiciones de interfaces de la API
└── App.tsx        # Lógica principal
```

📝 Licencia
Este proyecto está bajo la Licencia MIT.