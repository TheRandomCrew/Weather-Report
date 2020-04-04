import './js/loaders';
import weather from './js/service';
import layout from './js/layout';

const loader = document.getElementById('loading');

window.addEventListener('load', async () => {
  const data = await weather().getData();
  if (data) {
    await layout(data);
    loader.setAttribute('style', 'display: none; !important');
  }
});

document.getElementById('search-button').addEventListener('click', async e => {
  await loader.setAttribute('style', 'display: flex; !important');
  const old = document.getElementById('main');
  old.parentNode.removeChild(old);
  e.preventDefault();
  const input = document.getElementById('search-input');
  const cityId = input.getAttribute('data');
  if (!input.hasAttribute('data')) return;
  const data = await weather().getData(cityId);
  await layout(data);
  input.value = '';
  input.removeAttribute('data');
  loader.setAttribute('style', 'display: none; !important');
});