/* eslint-disable react/prop-types */

import "leaflet/dist/leaflet.css";
import "./App.css";
import Header from "./Components/Header";

import WeatherCard from "./Components/WeatherCard";
import WeatherMap from "./Components/WeatherMap";
import ForCasting from "./Components/ForCasting";

import { useStateContext } from "./Context";
import BackgroundLayout from "./Components/BackgroundLayout";

function App() {
  const { weather, thisLocation,  values } = useStateContext();
  const { latitude, longitude , address } = thisLocation;

  return (
    <>
      <Header />
     <BackgroundLayout></BackgroundLayout>
      <main className="mx-14 mb-10">
        <div className="flex justify-between items-center py-2 gap-4">
        <WeatherCard
            place={address}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
            visibility={weather.visibility}
            sealevelpressure={weather.sealevelpressure}
          />

          <WeatherMap lati={latitude} long={longitude} />
        </div>

        <div className="glassCard py-2">
          <h1 className="font-bold text-white px-5">7 DAY FORECAST</h1>
          <hr />
          <div className="flex justify-between items-center gap-1 p-3">
            {values?.slice(1, 7).map((curr) => {
              return (
                <ForCasting
                  key={curr.datetime}
                  time={curr.datetime}
                  temp={curr.temp}
                  iconString={curr.conditions}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
