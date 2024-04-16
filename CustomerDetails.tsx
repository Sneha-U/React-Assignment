import React, { useState, useEffect } from 'react';
import { Customer } from '../types/Customer';

interface CustomerDetailsProps {
  customer: Customer;
}

export const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhotoIndex((prevIndex) => (prevIndex + 1) % customer.photos.length);
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [customer.photos]);

  return (
    <div>
      <h2>{customer.name}</h2>
      <h3>{customer.title}</h3>
      <p>{customer.address}</p>
      <div>
        {customer.photos.slice(photoIndex, photoIndex + 9).map((photo, index) => (
          <img key={index} src={photo} alt="" />
        ))}
      </div>
    </div>
  );
};