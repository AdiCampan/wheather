import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { BsSearch } from 'react-icons/bs';
import WhetherIcons from './WhetherIcons';
import Day from './Day';
import { getWeatherInfo } from './Petition';
import CityCard from './CityCard';

function App() {
  const [whetherData, setWhetherData] = useState(null);
  const [weatherdataByCity, setweahtherDataByCity] = useState(null);
  const [input, setInput] = useState('');
  const date = new Date().toDateString();

  useEffect(() => {
    getWeatherInfo().then((data) => {

      setWhetherData(data);
      // setInput(data.timezone);
    });
  }, []);

  const getDataByCity = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=34aa0227b33480606c9386fee4fe94c1&units=metric`)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        if (data.message) {
          alert("City not found")
        }
        else
          setweahtherDataByCity(data)
      }

      );
    setWhetherData(null);

  }

  // console.log(weatherdataByCity);
  return (
    <div className="App">
      <div className='header'>
        <div>{date}</div>
        <h1>The Whether</h1>
      </div>
      <div>
        <input className='input'
          onChange={e => setInput(e.target.value)}
          placeholder='Search...'
          value={input}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              ev.preventDefault();
              getDataByCity();
              setInput("");
            }
          }}

        ></input>
        <BsSearch
          style={{ cursor: 'pointer' }}
          onClick={getDataByCity}
        />
      </div>
      <div className='whether-window'>
        {weatherdataByCity &&
          <CityCard
            data={weatherdataByCity}
          />}
        {whetherData &&
          <WhetherIcons
            data={whetherData}
          />}
      </div>
      <div className='daily-whether'>

        {weatherdataByCity && <>
          <Day data={weatherdataByCity.list[5]}
          />
          <Day data={weatherdataByCity.list[15]}
          />
          <Day data={weatherdataByCity.list[20]}
          />
          <Day data={weatherdataByCity.list[25]}
          />
          <Day data={weatherdataByCity.list[30]}
          />
        </>
        }

      </div>

    </div>
  );
}

export default App;
