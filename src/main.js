import './main.css';
import './css/root.css';
import './css/layout.css';
import './css/weather.css';
import './css/search.css';
// import weather from './js/service';
import autocomplete from './js/autocomplete';

// window.addEventListener('DOMContentLoaded', async () => {
// });

window.addEventListener('load', async () => {
  // const data = await weather().getData();
  // console.log(data);
  const searchInput = document.getElementById('search-input');
  autocomplete(searchInput);
});

document.getElementById('search-button').addEventListener('click', async e => {
  e.preventDefault();
  const input = document.getElementById('search-input');
  // const cityId = input.getAttribute('data');
  if (!input.hasAttribute('data')) return;
  // const data = await weather().getData(cityId);
  // console.info(data);
  input.value = '';
  input.removeAttribute('data');
});
