import React from 'react';
import { timestampToTime } from '../lib/converter';
import InfoItem from './InfoItem';
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ data }) => (
  <>
    <h1 className={styles.title}>More Info</h1>
    <hr className={styles.divider} />
    <InfoItem
      name="Wind"
      value={`${data?.wind?.speed} m/s ${data?.wind?.deg}°`}
    />
    <InfoItem name="Sunrise" value={timestampToTime(data?.sys?.sunrise)} />
    <InfoItem name="Sunset" value={timestampToTime(data?.sys?.sunset)} />
    <InfoItem name="Humidity" value={`${data?.main?.humidity}%`} />
  </>
);

export default Sidebar;
