import React from 'react';
import { useNaturalSafetyData } from '../../hooks/guidelines/useNaturalSafetyData';
import { useSocialSafetyData } from '../../hooks/guidelines/useSocialSafetyData';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const GuidelineDetail = () => {
  const { id } = useParams<{ id: string }>();

  // const { data } = useNaturalSafetyData({ safety_cate: '01014', pageNo: 1 });
  const { data } = useSocialSafetyData({ safety_cate: '02006', pageNo: 1 });
  console.log(data);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '30px 0' }}>
      {id ? (
        <Typography
          variant='h1'
          sx={{ marginLeft: '10px' }}
        >{`${id}발생 시 행동요령`}</Typography>
      ) : (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px 10px',
          }}
        >
          <Typography variant='h1'>
            카테고리에서 재난을 선택하여 행동요령을 확인하세요.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default GuidelineDetail;
