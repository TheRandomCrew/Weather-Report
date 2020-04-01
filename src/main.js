import './main.css';
import './css/root.css';
import './css/layout.css';
import './css/weather.css';
import weather from './js/service';

window.addEventListener('DOMContentLoaded', async () => {
  const data = await weather().getData();
  console.log(data);
});
