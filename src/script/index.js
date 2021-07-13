document.getElementById('get_info').addEventListener('click', () => {

  var value = document.getElementById('destination_dropdown').value
  let weatherForecast = {};


  fetch('https://goweather.herokuapp.com/weather/' + value)
    .then(function(response) {
      console.log(`https://goweather.herokuapp.com/weather/ ${value}`)
      return response.json()
    })
    .then(function(data) {
      console.log(data)
      weatherForecast = data;
      // let convertedTemp1 = convertCelcToFar(weatherForecast.forecast[0].temperature);
      document.getElementById('day1Temp').innerText = weatherForecast.forecast[0].temperature;
      document.getElementById('day2Temp').innerText = weatherForecast.forecast[1].temperature;
      document.getElementById('day3Temp').innerText = weatherForecast.forecast[2].temperature;

      document.getElementById('todaysWeather').innerText = weatherForecast.description;
      

  })




  //document.location.href = '../html/confirmation.html';
})

function convertCelcToFar(tempInCelc) {
  console.log(tempInCelc);
  return Math.floor(tempInCelc * 1.8 + 32)
}
