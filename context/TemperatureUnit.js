import { createContext, useState } from 'react';

const TemperatureUnitContext = createContext({
  isCelsius: true,
  toggleTemperatureUnit: () => {},
});

export const TemperatureUnitProvider = (props) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => setIsCelsius(!isCelsius);

  return (
    <TemperatureUnitContext.Provider
      value={{ isCelsius, toggleTemperatureUnit }}
    >
      {props.children}
    </TemperatureUnitContext.Provider>
  );
};

export default TemperatureUnitContext;
