document.getElementById('paidButton').onclick = function() {
  
  const retrievedPrice = JSON.parse(localStorage.getItem('savedPrice'));
  const taxes = 30
  const ACTFee = 50
  const total = retrievedPrice + taxes + ACTFee


  const customer = document.getElementById('name').value
  const address = document.getElementById('street').value
  const email = document.getElementById('email').value
  document.querySelector('.invoiceBox').style.display = 'block'
  document.getElementById('customer').append(customer, document.createElement('br'), address, document.createElement('br'), email)
  document.getElementById('ticketPrice').innerText = `$${retrievedPrice}.00`
  document.getElementById('taxes').innerText = `$${taxes}.00`
  document.getElementById('ACTFee').innerText =  `$${ACTFee}.00`
  document.getElementById('total').innerText =  `$${total}.00`


  alert("How could you possibly have trusted this janky website! We now have your identity and bitcoins!")
}

const btcConvert = (dollarValue) => {
    const btcValue = 35000
    const convertedValue = dollarValue / btcValue
    return convertedValue
  }
  