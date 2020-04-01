// import { home, menu, contact } from './template';

const layout = (cityId) => {
  if (typeof cityId !== 'number') throw new TypeError('City ID Provided is invalid!');
  // const main = document.createElement('main');
  // main.setAttribute('id', 'main');
  // if (currentTab === 'Home') main.innerHTML = home();
  // if (currentTab === 'Menu') main.innerHTML = menu();
  // if (currentTab === 'Contact') main.innerHTML = contact();
  // document.getElementById('content').appendChild(main);
};

export default layout;
