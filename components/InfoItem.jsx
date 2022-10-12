import React from 'react';

const InfoItem = ({ name, value }) => (
  <div className="my-6">
    <p className="font-light text-3xl leading-6">{name}</p>
    <p className="font-medium text-3xl">{value}</p>
  </div>
);

export default InfoItem;
