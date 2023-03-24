const text2 = document.querySelector('.text2');

/** tidak berfungsi save it for later //
const xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    text2.textContent = `Top 3 countries: ${data[0].name}, ${data[1].name}, ${data[2].name}`;
  }
};
xhr.send();
*/ 