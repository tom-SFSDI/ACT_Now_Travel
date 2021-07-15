document.getElementById('get_info').addEventListener('click', () => {
  const value = document.getElementById('destination_dropdown').value;
  let weatherForecast = {};
  const airportCodes = [`DFW-sky/`, `MCO-sky/`, `LAX-sky/`, `MSY-sky/`, `JFK-sky/`];
  const airportSelected = (string) => {
    if (string === `Dallas`) {
      return airportCodes[0];
    } else if (string === `Orlando`) {
      return airportCodes[1];
    } else if (string === `LosAngeles`) {
      return airportCodes[2];
    } else if (string === `NewOrleans`) {
      return airportCodes[3];
    } else {
      return airportCodes[4];
    }
  };
  document.getElementById('weatherTable').style.display = 'block';
  document.getElementById('bookNow').style.display = 'block';
  const departDate = document.getElementById('dateOfTravel').value;
  fetch('https://goweather.herokuapp.com/weather/' + value)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      weatherForecast = data;
      document.getElementById('day1Temp').innerText = weatherForecast.forecast[0].temperature;
      document.getElementById('day2Temp').innerText = weatherForecast.forecast[1].temperature;
      document.getElementById('day3Temp').innerText = weatherForecast.forecast[2].temperature;

      document.getElementById('todaysWeather').innerText = weatherForecast.description;
    });
  const baseURL = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/ORD-sky/`;
  const dynamicURL = `${baseURL}${airportSelected(value)}${departDate}`;

  fetch(dynamicURL, {
      'method': 'GET',
      'headers': {
        'x-rapidapi-key': 'e8336ed4dbmshc74bad6810bd5a9p1ea62djsne419c89fee3b',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById('price').innerText = `Wowzers. We found a flight for $${data.Quotes[0].MinPrice}!!`;
      localStorage.setItem('savedPrice', JSON.stringify(data.Quotes[0].MinPrice));
      localStorage.setItem('savedDestination', value);
    })
    .catch((err) => {
      console.error(err);
    });
});

// function convertCelcToFar(tempInCelc) {
//   console.log(tempInCelc);
//   return Math.floor(tempInCelc * 1.8 + 32);
// }
