import { Box, Grid, styled, Typography, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const DisasterTypeBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: '20px',
  gridTemplateColumns: 'repeat(10, 1fr)',
  justifyItems: 'center',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(6, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(0,0,0,0.1)',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#e0e0e0',
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
}));

const DisasterTypeInfo = () => {
  const theme = useTheme();
  return (
    <Box flex={2} padding='40px'>
      <Typography
        variant='h1'
        sx={{
          marginBottom: '2em',
        }}
      >
        재난별 정보조회
      </Typography>
      <Grid container spacing={2}>
        {/* {ㅡㅡ} */}
        <Grid
          size={{ xs: 6, sm: 5, md: 4, lg: 3 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconCircle>
            <FontAwesomeIcon icon={faBolt} size='lg' />
          </IconCircle>
          <Typography
            variant='body1'
            sx={{
              marginTop: '8px',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.9rem',
            }}
          >
            낙뢰
          </Typography>
        </Grid>
        {/* {ㅡㅡ} */}
        <Grid
          size={{ xs: 6, sm: 5, md: 4, lg: 3 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconCircle>
            <FontAwesomeIcon icon={faBolt} size='lg' />
          </IconCircle>
          <Typography
            variant='body1'
            sx={{
              marginTop: '8px',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.9rem',
            }}
          >
            낙뢰
          </Typography>
        </Grid>
        {/* {ㅡㅡ} */}
        <Grid
          size={{ xs: 6, sm: 5, md: 4, lg: 3 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconCircle>
            <FontAwesomeIcon icon={faBolt} size='lg' />
          </IconCircle>
          <Typography
            variant='body1'
            sx={{
              marginTop: '8px',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.9rem',
            }}
          >
            낙뢰
          </Typography>
        </Grid>
        {/* {ㅡㅡ} */}
        <Grid
          size={{ xs: 6, sm: 5, md: 4, lg: 3 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconCircle>
            <FontAwesomeIcon icon={faBolt} size='lg' />
          </IconCircle>
          <Typography
            variant='body1'
            sx={{
              marginTop: '8px',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.9rem',
            }}
          >
            낙뢰
          </Typography>
        </Grid>
        {/* {ㅡㅡ} */}
        {/* {ㅡㅡ} */}
        <Grid
          size={{ xs: 6, sm: 5, md: 4, lg: 3 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconCircle>
            <FontAwesomeIcon icon={faBolt} size='lg' />
          </IconCircle>
          <Typography
            variant='body1'
            sx={{
              marginTop: '8px',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.9rem',
            }}
          >
            낙뢰
          </Typography>
        </Grid>
        {/* {ㅡㅡ} */}
        {/* {ㅡㅡ} */}
        <Grid
          size={{ xs: 6, sm: 5, md: 4, lg: 3 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconCircle>
            <FontAwesomeIcon icon={faBolt} size='lg' />
          </IconCircle>
          <Typography
            variant='body1'
            sx={{
              marginTop: '8px',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.9rem',
            }}
          >
            낙뢰
          </Typography>
        </Grid>
        {/* {ㅡㅡ} */}
        {/* {ㅡㅡ} */}
        <Grid
          size={{ xs: 6, sm: 5, md: 4, lg: 3 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconCircle>
            <FontAwesomeIcon icon={faBolt} size='lg' />
          </IconCircle>
          <Typography
            variant='body1'
            sx={{
              marginTop: '8px',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.9rem',
            }}
          >
            낙뢰
          </Typography>
        </Grid>
        {/* {ㅡㅡ} */}
        {/* {ㅡㅡ} */}
        <Grid
          size={{ xs: 6, sm: 5, md: 4, lg: 3 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <IconCircle>
            <FontAwesomeIcon icon={faBolt} size='lg' />
          </IconCircle>
          <Typography
            variant='body1'
            sx={{
              marginTop: '8px',
              fontFamily: theme.typography.fontFamily,
              fontSize: '0.9rem',
            }}
          >
            낙뢰
          </Typography>
        </Grid>
        {/* {ㅡㅡ} */}
        {/* {ㅡㅡ} */}
      </Grid>
    </Box>
  );
};

export default DisasterTypeInfo;
