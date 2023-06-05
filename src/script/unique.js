
/*belum berfungsi*/
const searchResult = document.querySelector('search-result');
const searchHeading = document.querySelector('#search-heading');
const searchInstruction = document.querySelector('#search-instruction');

searchResult.addEventListener('display', () => {
  searchHeading.style.display = 'none';
  searchInstruction.style.display = 'none';
});