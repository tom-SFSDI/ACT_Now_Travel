document.getElementById('get_info').addEventListener('click', () => {

  var value = document.getElementById('destination_dropdown').value
  console.log(value)

  fetch('https://goweather.herokuapp.com/weather/' + value)
    .then(function(response) {
      console.log("you made it")
      return response.json()
    })
    .then(function(data) {
      console.log(data)
  })




  //document.location.href = '../html/confirmation.html';
})

// function convertCelcToFar(tempInCelc) {
//   return Math.floor(tempInCelc * 1.8 + 32)
// }
