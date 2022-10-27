import React from 'react';

const InfoItem = ({ name, value }) => (
  <div className="my-6">
    <p className="font-light md:text-3xl text-2xl leading-6">{name}</p>
    <p className="font-medium md:text-3xl text-2xl">{value}</p>
  </div>
);

export default InfoItem;
