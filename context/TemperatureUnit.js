import { createContext, useState } from 'react';

const TemperatureUnitContext = createContext({
  temperatureUnit: 'celsius',
  toggleTemperatureUnit: () => {},
});

export const TemperatureUnitProvider = (props) => {
  const [temperatureUnit, setTemperatureUnit] = useState('celsius');

  const toggleTemperatureUnit = () => (temperatureUnit === 'celsius'
    ? setTemperatureUnit('fahrenheit')
    : setTemperatureUnit('celsius'));

  return (
    <TemperatureUnitContext.Provider
      value={{ temperatureUnit, toggleTemperatureUnit }}
    >
      {props.children}
    </TemperatureUnitContext.Provider>
  );
};

export default TemperatureUnitContext;
