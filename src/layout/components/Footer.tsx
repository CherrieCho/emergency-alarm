import { Box, Typography } from '@mui/material';
import { flex, styled } from '@mui/system';

const FooterContainer = styled(Box)({
  marginTop: '60px',
  padding: '30px',
});

const FooterContents = styled(Box)({});

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents></FooterContents>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '15px',
        }}
      >
        <Typography variant='subtitle1' sx={{ color: '#999999' }}>
          © 2025 이재난전해. All Rights Reserved
        </Typography>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
