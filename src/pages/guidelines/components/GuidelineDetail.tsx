// import { useNaturalSafetyData } from '../../hooks/guidelines/useNaturalSafetyData';
// import { useSocialSafetyData } from '../../../hooks/guidelines/useSocialSafetyData';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import { styled, useMediaQuery, useTheme } from '@mui/system';
import type { GuidelineContent } from '../../../models/guideline';
import { emergencyTips } from './config/emergencyTips';

const GuidelineBox = styled(Box)({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const GuidelineImage = styled('img')(({ theme }) => ({
  width: 'auto',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    width: '140px',
  },
}));

const GuidelineDetail = () => {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  //emergencyTips 배열에서 name이 현재 url의 params와 일치하는 것을 찾아 렌더링
  const content: GuidelineContent | undefined = emergencyTips.find(
    (item) => item.name === id
  );

  // const { data } = useNaturalSafetyData({ safety_cate: '01014', pageNo: 1 });
  // const { data } = useSocialSafetyData({ safety_cate: '02006', pageNo: 1 });
  // console.log(data);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '30px 0' }}>
      {id ? (
        <div>
          <Typography
            variant='h1'
            sx={{ marginLeft: '10px' }}
          >{`${id}발생 시 행동요령`}</Typography>
          <Grid
            container
            spacing={2}
            justifyContent={isLargeScreen ? 'space-between' : 'flex-start'}
            sx={{ marginTop: '3rem' }}
          >
            {content?.tips.map((tip, index) => (
              <Grid size={{ xs: 6, md: 4, lg: 2 }} key={index}>
                <GuidelineBox>
                  <Box sx={{ height: '100px' }}>
                    <GuidelineImage src={content.images[index]} alt={tip} />
                  </Box>
                  <Typography
                    variant='body1'
                    sx={{
                      padding: '10px',
                      paddingTop: '1em',
                      fontWeight: 600,
                      color: '#333333',
                    }}
                  >
                    {tip}
                  </Typography>
                </GuidelineBox>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              marginTop: '2em',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Typography variant='subtitle1'>이미지 출처: KBS</Typography>
          </Box>
        </div>
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
          <Typography variant='h1' sx={{ color: '#666666' }}>
            카테고리에서 재난을 선택하여 행동요령을 확인하세요.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default GuidelineDetail;
