document.getElementById('get_info').addEventListener('click', () => {

  var value = document.getElementById('destination_dropdown').value
  let weatherForecast = {};
  const airportCodes = [`DFW-sky/`, `MCO-sky/`, `LAX-sky/`, `MSY-sky/`, `JFK-sky/`]
  const airportSelected = (string) => {
    if (string === `Dallas`) {
      return airportCodes[0]
    } else if (string === `Orlando`) {
      return airportCodes[1]
    } else if (string === `LosAngeles`) {
      return airportCodes[2]
    } else if (string === `NewOrleans`) {
      return airportCodes[3]
    } else {
      return airportCodes[4]
    }
  }
  const bookNowButton = document.createElement('button', id = 'book_now')
  document.getElementById('priceButtonLocation').appendChild(bookNowButton)
  bookNowButton.innerText = `Book Now!`
  bookNowButton.href = `confirmation.html`
  document.getElementById('weatherTable').style.display = 'block'

  let departDate = document.getElementById('dateOfTravel').value
  console.log(departDate)
    // let returnDate = 

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
  let baseURL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/ORD-sky/`
  let dynamicURL = `${baseURL}${airportSelected(value)}${departDate}`
  console.log(dynamicURL)
    // console.log(airportSelected(value))
    // document.getElementById('destination_dropdown').value()
  fetch(dynamicURL, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "e8336ed4dbmshc74bad6810bd5a9p1ea62djsne419c89fee3b",
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com"
      }
    })
    .then(response => {
      // console.log(response.json());
      return response.json()
    })
    .then(data => {
      console.log(data)
        // document.getElementById('book_now').display = 'block'
      document.getElementById('price').innerText = `Wowzers. We found a flight for $${data.Quotes[0].MinPrice}!!`
    })
    .catch(err => {
      console.error(err);
    });
  //document.location.href = '../html/confirmation.html';
})

function convertCelcToFar(tempInCelc) {
  console.log(tempInCelc);
  return Math.floor(tempInCelc * 1.8 + 32)
}
