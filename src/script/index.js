// we know where you at!!!
function success(pos) {
  const crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

// If you give us permission...
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
// Displays lat/long in console
window.navigator.geolocation.getCurrentPosition(success, error);

// Default date populator
document.getElementById('dateOfTravel').value = new Date().toLocaleDateString('en-CA');

// On click listener
document.getElementById('get_info').addEventListener('click', () => {
  const value = document.getElementById('destination_dropdown').value;
  // Determine airport codes for API call depending on destination city
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

  // Hides weather if it is currently showing (so new destination will only show)
  if (document.querySelector('.weatherShow')) {
    document.querySelector('.weatherShow').classList.replace('weatherShow', 'weatherHide');
  }

  document.getElementById(value).classList.remove('weatherHide');
  document.getElementById(value).classList.add('weatherShow');
  document.getElementById('weatherInfo').style.display = 'block';
  document.getElementById('bookNow').style.display = 'block';

  // Prepare for low fares here!!! (fetch call)
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
      // Save that info yo
      localStorage.setItem('savedPrice', JSON.stringify(data.Quotes[0].MinPrice));
      localStorage.setItem('savedDestination', value);
    })
    .catch((err) => {
      console.error(err);
    });
});
