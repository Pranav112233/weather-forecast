import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempmax: 25.05,
        humidity: 47,
        weather: "haze",
        error:false,
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo((prev) => {
            console.log(newInfo);
            return {...prev,...newInfo};
        })
    };
    // console.log(weatherInfo);
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo} />
            {!weatherInfo.error && <InfoBox info={weatherInfo} />}
        </div>
    );
}
