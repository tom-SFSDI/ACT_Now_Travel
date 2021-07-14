document.getElementById('paidButton').onclick = function() {
  const customer = document.getElementById('name').value
  const address = document.getElementById('street').value
  const email = document.getElementById('email').value
  document.querySelector('.invoiceBox').style.display = 'block'
    //   document.getElementById('customer').innerText = customer
    //   document.getElementById('customer').append(`${address}`)
  document.getElementById('customer').append(customer, document.createElement('br'), address, document.createElement('br'), email)

  alert("How could you possibly have trusted this janky website! We now have your identity and bitcoins!")
}
