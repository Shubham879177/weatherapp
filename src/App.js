import './App.css';
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeandLocations from './components/TimeandLocations';
import TempandDetails from './components/TempandDetails';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './Service/WeatherService';

import { useState, useEffect } from 'react';



function App() {

  const [query, setQuery] = useState({ q: "Mathura" })
  const [units, setUnits] = useState({ units: "metric" })
  const [weather, setWeather] = useState("")


  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, ...units }).then((data) => {
        setWeather(data)
      })
    }
    fetchWeather()
  }, [query, units])




  return (
    <div>
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex items-center justify-between">
          <div class="text-white">
            <a href="#" class="text-xl font-semibold">Forecast</a>
          </div>
          
        </div>
      </nav>

      <div className='mx-auto max-w-screen-2xl py-4 px-32 bg-cyan-700'>
        <TopButton setQuery={setQuery} />
        <Inputs setUnits={setUnits} setQuery={setQuery} />

        {weather && (
          <div>
            <TimeandLocations weather={weather} />
            <TempandDetails weather={weather} />
            <Forcast title="hourly forcast" weather={weather} />
            {/* <Forcast title="daily forcast"/> */}
            {/* <Forcast title="10 days forcast"/> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
