import { home, menu, contact } from './template';

const layout = (currentTab = 'Home') => {
  if (typeof currentTab !== 'string') throw new TypeError('Tab Provided is invalid!');
  const main = document.createElement('main');
  main.setAttribute('id', 'main');
  if (currentTab === 'Home') main.innerHTML = home();
  if (currentTab === 'Menu') main.innerHTML = menu();
  if (currentTab === 'Contact') main.innerHTML = contact();
  document.getElementById('content').appendChild(main);
};

export default layout;
