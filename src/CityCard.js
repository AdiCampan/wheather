import React from 'react'

function CityCard(data) {

  const icon = data?.data.list[0].weather[0].icon;
  const date = new Date().toDateString();
  const temperature = Math.round(data?.data.list[0].main.temp);
  
  return (
    <>
      <div>
        
        <div className="icon-box">
          <h3 className='city-box' style={{ color: 'white' }}>{data.data.city.name}, {data.data.city.country}</h3>
          <h2 className='temp-box'>{temperature} ºC</h2>
          <img className='icon' src={`http://openweathermap.org/img/wn/${icon}.png`} />
        </div>
      </div>
    </>
  )
}

export default CityCard;