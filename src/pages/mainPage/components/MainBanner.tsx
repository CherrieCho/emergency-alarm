import { Box, Typography, useTheme } from '@mui/material';

const MainBanner = () => {
  const theme = useTheme();
  return (
    <Box flex={1} padding='40px'>
      <Typography
        mb={2}
        sx={{
          fontFamily: theme.typography.fontFamily,
          fontWeight: 'bold',
          fontSize: '1.3rem',
        }}
      >
        MainBanner
      </Typography>
    </Box>
  );
};

export default MainBanner;
