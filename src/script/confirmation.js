// Give me that sweet low fare
const retrievedDestination = localStorage.getItem('savedDestination');
const retrievedPrice = JSON.parse(localStorage.getItem('savedPrice'));
// Use local storage info
document.getElementById('destination').innerText = retrievedDestination;
document.getElementById('tripCost').innerText = retrievedPrice;
// Prepare dates for invoice
const date = new Date().toLocaleString().slice(0, 9);
const dueDate = new Date(Date.now() + 12096e5).toLocaleString().slice(0, 9);
// Load dates
document.getElementById('date').innerText = date;
document.getElementById('dueDate').innerText = dueDate;

// On click event, load form info into invoice and make function calls to BTC converter
document.getElementById('paidButton').onclick = function() {
  // Those taxes seem kinda high..
  const taxes = 30;
  // As does this arbitrary $50 fee...
  const ACTFee = 50;
  const total = retrievedPrice + taxes + ACTFee;
  // Just give us the coins already...
  const bitcoinTotal = btcConvert(total).toFixed(8);
  const customer = document.getElementById('name').value;
  const address = document.getElementById('street').value;
  const email = document.getElementById('email').value;
  // Load the form info on the invoice
  document.querySelector('.invoiceBox').style.display = 'block';
  document.getElementById('customer').append(customer, document.createElement('br'), address, document.createElement('br'), email);
  document.getElementById('convertedBitcoin').innerText = `${btcConvert(total).toFixed(8)} BTC`;
  document.getElementById('ticketPrice').innerText = `$${retrievedPrice}.00`;
  document.getElementById('taxes').innerText = `$${taxes}.00`;
  document.getElementById('ACTFee').innerText = `$${ACTFee}.00`;
  document.getElementById('total').innerText = `${bitcoinTotal} BTC / $${total}.00`;
  // We should have kept this alert..
  // alert("How could you possibly have trusted this janky website! We now have your identity and bitcoins!")
};

// Who doesnt love some Crypto currency
function btcConvert(dollarValue) {
  const btcValue = 35000;
  const convertedValue = dollarValue / btcValue;
  return convertedValue;
}

// Future ETH enhancement
// function etherConvert(dollarValue) {
//   const etherValue = 2000;
//   const convertEtherValue = dollarValue / etherValue;
//   return convertEtherValue;
// }
