import {
  AppBar,
  Box,
  Button,
  IconButton,
  styled,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import LogoImg from '../../assets/logo.png';
import theme from '../../theme';

const AuthButton = styled(Button)({
  borderRadius: '12px',
  border: '1px solid #EBEBEB',
  padding: '10px 12px',
  fontWeight: 600,
});

const LogoImage = styled('img')({
  display: 'block',
  width: '100%',
  height: 'auto',
});

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'white',
          boxShadow: 0,
          borderBottom: '1px solid #EBEBEB',
          height: '76px',
          [theme.breakpoints.down('sm')]: {
            height: '60px',
          },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 auto',
            maxWidth: '1200px',
            width: '100%',
            height: 'inherit',
          }}
        >
          {/* <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box
            sx={{
              width: '150px',
              [theme.breakpoints.down('sm')]: {
                width: '95px',
              },
            }}
          >
            <LogoImage src={LogoImg} alt='logo-image' />
          </Box>
          <AuthButton>로그인 / 회원가입</AuthButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
