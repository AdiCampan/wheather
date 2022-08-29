import React from 'react';
import './Day.css';

function Day(data) {
  console.log(data);

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date(data.data.dt * 1000);
  var dayName = days[d.getDay()];

  const temp = Math.round(data.data.main.temp);
  const icon = data.data.weather[0].icon;

  return (
    <>
      <div className='daily-box'>
        <div className='day'>{dayName}</div>
        <div className='temp'>{temp} ºC</div>
        <img className='icon' src={`http://openweathermap.org/img/wn/${icon}.png`}/>
      </div>
    </>
  )
}

export default Day