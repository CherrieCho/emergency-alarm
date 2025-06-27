import React from 'react';
import { useNaturalSafetyData } from '../../hooks/guidelines/useNaturalSafetyData';

const Guidelines = () => {
  const { data } = useNaturalSafetyData();

  console.log(data);
  return <div>guidelines</div>;
};

export default Guidelines;
