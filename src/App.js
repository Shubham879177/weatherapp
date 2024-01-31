import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeandLocations from './components/TimeandLocations';
import TempandDetails from './components/TempandDetails';


function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-4 px-32 bg-cyan-700'>
      <TopButton/>
      <Inputs/>
      <TimeandLocations/>
      <TempandDetails/>
    </div>
  );
}

export default App;
