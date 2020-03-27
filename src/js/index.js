import layout from './layout';

const tabs = (() => {
  const tabs = ['Home', 'Menu', 'Contact'];
  let current = 'Home';

  const init = () => {
    try {
      layout();
      return {
        ok: 'Tabs generated!',
      };
    } catch (error) {
      return { error: error.message };
    }
  };

  const change = (tab = '') => {
    try {
      if (typeof tab !== 'string') throw new TypeError('Tab must be string');
      if (!tabs.includes(tab)) throw new RangeError('Tab incorrect. Must be Home | Menu | Contact');
      if (tab === current) throw new Error('Its the same tab');
      layout(tab);
      current = tab;
      return {
        ok: 'Tab Changed!',
      };
    } catch (error) {
      return { error: error.message };
    }
  };

  const buttonEvent = (button = 'Home') => {
    try {
      document.getElementById(button.toLowerCase()).addEventListener('click', () => {
        const main = document.getElementById('main');
        if (main.hasChildNodes()) {
          document.getElementById('content').removeChild(main);
        }
        change(button);
        ['Home', 'Menu', 'Contact'].forEach(item => {
          if (item !== button) buttonEvent(item);
        });
      });
      return {
        ok: `Tab Changed with button! ${button}`,
      };
    } catch (error) {
      return { error: error.message };
    }
  };

  return {
    init,
    buttonEvent,
  };
})();

export default tabs;
