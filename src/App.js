import './App.css';
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeandLocations from './components/TimeandLocations';
import TempandDetails from './components/TempandDetails';
import Forcast from './components/Forcast';
import getFormattedWeatherData from './Service/WeatherService';

import { useState,useEffect } from 'react';



function App() {

  const [query, setQuery] = useState({q:"tokyo"})
  const [units, setUnits] = useState({units:"metric"})
  const [weather, setWeather] = useState("")


  useEffect(() => {
    const fetchWeather = async()=>{
      await getFormattedWeatherData({...query,...units}).then((data)=>{
      setWeather(data)
      console.log(data)
      })
    }
    fetchWeather()
  }, [query,units])
  



    return (
    <div className='mx-auto max-w-screen-2xl mt-4 py-4 px-32 bg-cyan-700'>
      <TopButton/>
      <Inputs/>

      {weather && (
        <div>
        <TimeandLocations weather={weather}/>
        <TempandDetails weather={weather}/>
        <Forcast title="hourly forcast" weather={weather}/>
        {/* <Forcast title="daily forcast"/> */}
        {/* <Forcast title="10 days forcast"/> */}
      </div>
      )}
    </div>
  );
}

export default App;
