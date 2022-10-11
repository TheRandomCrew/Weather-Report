import React from 'react';
import { timestampToTime } from '../lib/converter';
import InfoItem from './InfoItem';
import TemperatureSwitch from './TemperatureSwitch';

const Sidebar = ({ data }) => (
  <>
    <h1 className="lg:text-4xl md:text-2xl text-xl text-center font-medium">
      More Info
    </h1>
    <hr className="border-t-2 my-2 border-white" />
    <InfoItem
      name="Wind"
      value={`${data?.wind?.speed} m/s ${data?.wind?.deg}°`}
    />
    <InfoItem name="Sunrise" value={timestampToTime(data?.sys?.sunrise)} />
    <InfoItem name="Sunset" value={timestampToTime(data?.sys?.sunset)} />
    <InfoItem name="Humidity" value={`${data?.main?.humidity}%`} />
    <InfoItem name="Latitude" value={`${data?.coord?.lat}°`} />
    <InfoItem name="Longitude" value={`${data?.coord?.lon}°`} />
    <TemperatureSwitch />
  </>
);

export default Sidebar;
