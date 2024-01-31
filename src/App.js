import './App.css';
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeandLocations from './components/TimeandLocations';
import TempandDetails from './components/TempandDetails';
import Forcast from './components/Forcast';
import getWeatherData from './Service/WeatherService';
import { useEffect } from 'react';



function App() {

  const fetchWeather = async()=>{
    const data= await getWeatherData({q:"Mathura"})
    console.log(data)
  }

  useEffect(() => {
    fetchWeather()
  }, [])
  



    return (
    <div className='mx-auto max-w-screen-md mt-4 py-4 px-32 bg-cyan-700'>
      <TopButton/>
      <Inputs/>
      <TimeandLocations/>
      <TempandDetails/>
      <Forcast title="hourly forcast"/>
      <Forcast title="daily forcast"/>
      <Forcast title="10 days forcast"/>
    </div>
  );
}

export default App;
