export const getWeatherInfo = async() => {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });


  const jsonData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=34aa0227b33480606c9386fee4fe94c1&units=metric`)
  const datos = await jsonData.json();
  return datos;
}
