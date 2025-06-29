// import { useNaturalSafetyData } from '../../hooks/guidelines/useNaturalSafetyData';
import { useSocialSafetyData } from '../../../hooks/guidelines/useSocialSafetyData';
import { useParams } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import { styled, useMediaQuery, useTheme } from '@mui/system';

const GuidelineBox = styled(Box)({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const GuidelineImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const GuidelineDetail = () => {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  // const { data } = useNaturalSafetyData({ safety_cate: '01014', pageNo: 1 });
  const { data } = useSocialSafetyData({ safety_cate: '02006', pageNo: 1 });
  console.log(data);

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
            <Grid size={{ xs: 6, md: 4, lg: 2 }}>
              <GuidelineBox>
                <Box>
                  <GuidelineImage src='https://d.kbs.co.kr/static/images/now/earthquake/tipsCard1.png' />
                </Box>
                <Typography
                  variant='body1'
                  sx={{ padding: '10px', paddingTop: '1em' }}
                >
                  탁자 아래로 들어가 다리를 잡고 몸을 보호합니다.
                </Typography>
              </GuidelineBox>
            </Grid>
            <Grid size={{ xs: 6, md: 4, lg: 2 }}>
              <GuidelineBox>
                <Box>
                  <GuidelineImage src='https://d.kbs.co.kr/static/images/now/earthquake/tipsCard1.png' />
                </Box>
                <Typography
                  variant='body1'
                  sx={{ padding: '10px', paddingTop: '1em' }}
                >
                  탁자 아래로 들어가 다리를 잡고 몸을 보호합니다.
                </Typography>
              </GuidelineBox>
            </Grid>
            <Grid size={{ xs: 6, md: 4, lg: 2 }}>
              <GuidelineBox>
                <Box>
                  <GuidelineImage src='https://d.kbs.co.kr/static/images/now/earthquake/tipsCard1.png' />
                </Box>
                <Typography
                  variant='body1'
                  sx={{ padding: '10px', paddingTop: '1em' }}
                >
                  탁자 아래로 들어가 다리를 잡고 몸을 보호합니다.
                </Typography>
              </GuidelineBox>
            </Grid>
            <Grid size={{ xs: 6, md: 4, lg: 2 }}>
              <GuidelineBox>
                <Box>
                  <GuidelineImage src='https://d.kbs.co.kr/static/images/now/earthquake/tipsCard1.png' />
                </Box>
                <Typography
                  variant='body1'
                  sx={{ padding: '10px', paddingTop: '1em' }}
                >
                  탁자 아래로 들어가 다리를 잡고 몸을 보호합니다.
                </Typography>
              </GuidelineBox>
            </Grid>
            <Grid size={{ xs: 6, md: 4, lg: 2 }}>
              <GuidelineBox>
                <Box>
                  <GuidelineImage src='https://d.kbs.co.kr/static/images/now/earthquake/tipsCard1.png' />
                </Box>
                <Typography
                  variant='body1'
                  sx={{ padding: '10px', paddingTop: '1em' }}
                >
                  탁자 아래로 들어가 다리를 잡고 몸을 보호합니다.
                </Typography>
              </GuidelineBox>
            </Grid>
          </Grid>
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
          <Typography variant='h1'>
            카테고리에서 재난을 선택하여 행동요령을 확인하세요.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default GuidelineDetail;
