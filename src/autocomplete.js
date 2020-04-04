
import autocomplete from './js/autocomplete';

window.addEventListener('load', async () => {
  const searchInput = document.getElementById('search-input');
  autocomplete(searchInput);
});