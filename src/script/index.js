document.getElementById('destination_search').addEventListener('click', () => {
  document.location.href = '../html/wiki.html';
})

function convertCelcToFar(tempInCelc) {
  return Math.floor(tempInCelc * 1.8 + 32)
}
