import weatherLayout from './template';

const layout = (data) => {
  try {
    if (typeof data !== 'object') throw new TypeError('Data Provided is invalid!');
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    main.classList.add('grid-container');
    main.innerHTML = weatherLayout(data);
    document.getElementById('page-body').appendChild(main);
    return true;
  } catch (error) {
    console.error(error)
    return false;
  }

};

export default layout;
