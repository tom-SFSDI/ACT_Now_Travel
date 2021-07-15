const retrievedDestination = localStorage.getItem('savedDestination');
const retrievedPrice = JSON.parse(localStorage.getItem('savedPrice'));
document.getElementById('destination').innerText = retrievedDestination;
document.getElementById('tripCost').innerText = retrievedPrice;
const date = new Date().toLocaleString().slice(0, 9);
const dueDate = new Date(Date.now() + 12096e5).toLocaleString().slice(0, 9);
document.getElementById('date').innerText = date;
document.getElementById('dueDate').innerText = dueDate;

document.getElementById('paidButton').onclick = function() {
  const taxes = 30;
  const ACTFee = 50;
  const total = retrievedPrice + taxes + ACTFee;
  const bitcoinTotal = btcConvert(total).toFixed(8);
  const customer = document.getElementById('name').value;
  const address = document.getElementById('street').value;
  const email = document.getElementById('email').value;
  document.querySelector('.invoiceBox').style.display = 'block';
  document.getElementById('customer').append(customer, document.createElement('br'), address, document.createElement('br'), email);
  document.getElementById('convertedBitcoin').innerText = `${btcConvert(total).toFixed(8)} BTC`;
  document.getElementById('ticketPrice').innerText = `$${retrievedPrice}.00`;
  document.getElementById('taxes').innerText = `$${taxes}.00`;
  document.getElementById('ACTFee').innerText = `$${ACTFee}.00`;
  document.getElementById('total').innerText = `${bitcoinTotal} BTC / $${total}.00`;
  // alert("How could you possibly have trusted this janky website! We now have your identity and bitcoins!")
};

function btcConvert(dollarValue) {
  const convertedValue = dollarValue / btcValue;
  return convertedValue;
}

// function etherConvert(dollarValue) {
//   const etherValue = 2000;
//   const convertEtherValue = dollarValue / etherValue;
//   return convertEtherValue;
// }
