import weatherLayout from './template';

const layout = (data) => {
  try {
    if (typeof data !== 'object') throw new TypeError('Data Provided is invalid!');
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    main.classList.add('grid-container');
    main.innerHTML = weatherLayout(data);
    document.getElementById('page-body').appendChild(main);
    document.getElementById('metrics').addEventListener('change', e => {
      const temp = document.getElementById('temp');
      const feels = document.getElementById('feels');
      if (e.target.checked) {
        temp.innerText = ((parseFloat(temp.innerText) * (9 / 5)) + 32).toFixed(2);
        document.getElementById('temp-icon').className = 'wi wi-fahrenheit';
        document.getElementById('feels').innerText = ((parseFloat(feels.innerText) * (9 / 5)) + 32).toFixed(2);
        document.getElementById('feels-icon').className = 'wi wi-fahrenheit';
      } else {
        temp.innerText = ((parseFloat(temp.innerText) - 32) * (5 / 9)).toFixed(2);
        document.getElementById('temp-icon').className = 'wi wi-celsius';
        document.getElementById('feels').innerText = ((parseFloat(feels.innerText) - 32) * (5 / 9)).toFixed(2);
        document.getElementById('feels-icon').className = 'wi wi-celsius';
      }
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default layout;
// pravesh
