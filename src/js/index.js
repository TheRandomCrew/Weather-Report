import layout from './layout';
import weatherAPI from './service';

const weather = (() => {
  this.data = {};

  const init = () => {
    try {
      const res = weatherAPI().getData();
      this.data = res;
      return {
        ok: true,
        data: this.data,
      };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  };

  const search = (cityId) => {
    try {
      if (typeof tab !== 'number') throw new TypeError('City ID must be number');

      const res = weatherAPI().getData(cityId);
      this.data = res;
      return {
        ok: true,
        data: this.data,
      };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  };

  const buttonEvent = () => {
    try {
      document.getElementById('search-button').addEventListener('click', () => {
        const cityId = document.getElementById('city-id');
        if (cityId.value) {
          const { ok, error, data } = search(cityId.value);
          if (ok) {
            layout(data);
          }
          throw new Error(error);
        }
        throw new Error('Choose a city from the list!');
      });
      return {
        ok: true,
      };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  };

  return {
    init,
    buttonEvent,
  };
})();

export default weather;
// pravesh
