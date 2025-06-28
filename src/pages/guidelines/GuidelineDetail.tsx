import React from 'react';
import { useNaturalSafetyData } from '../../hooks/guidelines/useNaturalSafetyData';
import { useSocialSafetyData } from '../../hooks/guidelines/useSocialSafetyData';

const GuidelineDetail = () => {
  // const { data } = useNaturalSafetyData({ safety_cate: '01014', pageNo: 1 });
  const { data } = useSocialSafetyData({ safety_cate: '02006', pageNo: 1 });
  console.log(data);
  return <div>GuidelineDetail</div>;
};

export default GuidelineDetail;
