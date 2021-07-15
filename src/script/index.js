document.getElementById('get_info').addEventListener('click', () => {
  const value = document.getElementById('destination_dropdown').value;
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

  if (document.querySelector('.weatherShow')) {
    document.querySelector('.weatherShow').classList.replace('weatherShow', 'weatherHide');
  }

  document.getElementById(value).classList.remove('weatherHide');
  document.getElementById(value).classList.add('weatherShow');
  document.getElementById('bookNow').style.display = 'block';
  const departDate = document.getElementById('dateOfTravel').value;
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
