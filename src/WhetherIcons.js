import './WhetherIcons.css';

function WhetherIcons(data) {

  const icon = data?.data.current.weather[0].icon;

  return (
    <>
      <div className="icon-box">
        <h3>{data.data.timezone}</h3>
        <img className='icon' src={`http://openweathermap.org/img/wn/${icon}.png`} />
      </div>
    </>
  )
}

export default WhetherIcons;
