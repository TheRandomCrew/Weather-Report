import './js/loaders';
import weather from './js/service';
import layout from './js/layout';

const loader = document.getElementById('loading');
// window.addEventListener('DOMContentLoaded', async () => {
// });

window.addEventListener('load', async () => {
  const data = await weather().getData();
  console.log(data);
  if (data) {
    const res = await layout(data);
    if (!res) {
      console.error('Layout problem')
    }
    loader.setAttribute('style', 'display: none; !important');
  }
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
