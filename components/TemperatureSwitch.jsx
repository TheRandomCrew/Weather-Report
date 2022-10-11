import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

const TemperatureSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (checked) => {
    setIsChecked(checked);
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
      uncheckedHandleIcon={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            color: '#000',
            fontSize: 16,
          }}
        >
          °C
        </div>
      }
      checkedHandleIcon={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            color: '#000',
            fontSize: 16,
          }}
        >
          °F
        </div>
      }
      className="react-switch"
      id="small-radius-switch"
    />
  );
};

export default TemperatureSwitch;
