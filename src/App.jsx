import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&appid=c153479685c47f1b34a83591f3b1acbe`
      )
        .then((res) => res.json())
        .then((data) => setWeatherData(data));
    }
  }, [city]);

  const cities = [
    { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
    { name: "Lahore", latitude: 31.5497, longitude: 74.3436 },
    { name: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
    { name: "Faisalabad", latitude: 31.4504, longitude: 73.135 },
    { name: "Rawalpindi", latitude: 33.5973, longitude: 73.0479 },
    { name: "Multan", latitude: 30.1575, longitude: 71.5249 },
    { name: "Peshawar", latitude: 34.0151, longitude: 71.5249 },
    { name: "Quetta", latitude: 30.1798, longitude: 66.975 },
    { name: "Sialkot", latitude: 32.4945, longitude: 74.5229 },
    { name: "Gujranwala", latitude: 32.1877, longitude: 74.1945 },
    { name: "Hyderabad", latitude: 25.396, longitude: 68.3578 },
    { name: "Sukkur", latitude: 27.7032, longitude: 68.8583 },
    { name: "Larkana", latitude: 27.5618, longitude: 68.209 },
    { name: "Bahawalpur", latitude: 29.3956, longitude: 71.6836 },
    { name: "Sargodha", latitude: 32.0836, longitude: 72.6711 },
    { name: "Mardan", latitude: 34.1983, longitude: 72.0405 },
    { name: "Kasur", latitude: 31.1187, longitude: 74.4507 },
    { name: "Sahiwal", latitude: 30.6764, longitude: 73.1068 },
    { name: "Rahim Yar Khan", latitude: 28.4195, longitude: 70.3039 },
    { name: "Gujrat", latitude: 32.5736, longitude: 74.0789 },
  ];

  const onHandleClick = (e) => {
    const selectedCity = cities.find((city) => city.name === e.target.value);
    setCity(selectedCity || null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100">
      <h1 className="text-5xl font-extrabold text-purple-600 mb-10">Weather App</h1>

      <select
        onChange={onHandleClick}
        className="w-64 p-3 mb-10 border border-purple-600 rounded-lg shadow-lg bg-purple-200 text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option>Select a city</option>
        {cities.map((data) => (
          <option key={data.name}>{data.name}</option>
        ))}
      </select>

      {weatherData && (
        <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Weather in {city.name}
          </h2>

          <div className="row-span-2 flex items-center justify-center">
  <img
    src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
    className="size-32"
    alt="Weather Icon"
  />
</div>

          <p className="text-xl text-purple-600 mb-2">
            Temperature: {Math.round(weatherData.main.temp - 273.15)} <sup>o</sup> C
          </p>
          <p className="text-xl text-purple-600">Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
