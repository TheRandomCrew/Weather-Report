import React, { useState, useContext } from 'react';
import ReactSwitch from 'react-switch';
import TemperatureUnitContext from '../context/TemperatureUnit';
import styles from '../styles/TemperatureSwitch.module.css';

const TemperatureSwitch = () => {
  const { toggleTemperatureUnit } = useContext(TemperatureUnitContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked) => {
    setIsChecked(checked);
    toggleTemperatureUnit();
  };

  return (
    <ReactSwitch
      checked={isChecked}
      onChange={handleChange}
      handleDiameter={28}
      offColor="none"
      onColor="none"
      offHandleColor="#fff"
      onHandleColor="#fff"
      height={40}
      width={70}
      borderRadius={0}
      activeBoxShadow="0px 0px 1px 2px #fff"
      uncheckedIcon={null}
      checkedIcon={null}
      uncheckedHandleIcon={<div className={styles['switch-handle']}>°C</div>}
      checkedHandleIcon={<div className={styles['switch-handle']}>°F</div>}
      className="react-switch"
      id="small-radius-switch"
    />
  );
};

export default TemperatureSwitch;
