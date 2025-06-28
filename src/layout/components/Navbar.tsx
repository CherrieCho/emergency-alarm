import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import LogoImg from '../../assets/logo.png';
import theme from '../../theme';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const drawerWidth = '100vw'; // drawer를 화면 전체 너비로

const AuthButton = styled(Button)({
  borderRadius: '12px',
  border: '1px solid #EBEBEB',
  padding: '10px 12px',
});

const AuthButtonMobile = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  borderRadius: '12px',
  border: 0,
  padding: '15px',
  width: '100%',
}));

const LogoImage = styled('img')({
  display: 'block',
  width: '100%',
  height: 'auto',
});

const MobileMenuBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

const AuthBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5em',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  //모바일 슬라이드 메뉴 오픈
  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const goToLogin = () => {
    navigate('/login');
    setOpen(false);
  };

  const goToMain = () => {
    navigate('/');
    setOpen(false);
  };

  const goToGuide = () => {
    navigate('/guideline');
    setOpen(false);
  };

  //drawer 내용
  const drawerList = (
    <Box
      sx={{
        width: drawerWidth,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
      role='presentation'
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={toggleDrawer(false)} sx={{ color: 'black' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={{ width: '150px', padding: '1em', paddingTop: 0 }}>
        <LogoImage src={LogoImg} alt='logo-image' />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1em 1.5em',
        }}
      >
        <AuthButtonMobile onClick={goToLogin}>
          <Typography variant='h2' sx={{ fontSize: '18px' }}>
            로그인 / 회원가입
          </Typography>
        </AuthButtonMobile>
      </Box>
      {/* 메뉴 리스트 */}
      <List sx={{ paddingTop: '1.5em' }}>
        <ListItem sx={{ padding: '10px 0' }}>
          <ListItemButton onClick={goToMain}>
            <ListItemIcon sx={{ color: '#333333' }}>
              <HomeIcon />
            </ListItemIcon>
            <Typography
              variant='body1'
              sx={{ fontWeight: 'bold', color: '#333333' }}
            >
              홈으로
            </Typography>
          </ListItemButton>
        </ListItem>

        <ListItem sx={{ padding: '10px 0' }}>
          <ListItemButton onClick={goToGuide}>
            <ListItemIcon sx={{ color: '#333333' }}>
              <DirectionsRunIcon />
            </ListItemIcon>
            <Typography
              variant='body1'
              sx={{ fontWeight: 'bold', color: '#333333' }}
            >
              재난 행동요령
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

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
          <Box
            sx={{
              width: '150px',
              cursor: 'pointer',
              [theme.breakpoints.down('sm')]: {
                width: '95px',
              },
            }}
          >
            <LogoImage src={LogoImg} alt='logo-image' onClick={goToMain} />
          </Box>
          <MobileMenuBox>
            <IconButton
              size='large'
              edge='start'
              aria-label='menu'
              onClick={toggleDrawer(true)}
              sx={{ mr: 2, color: 'black', margin: 0 }}
            >
              <MenuIcon />
            </IconButton>
          </MobileMenuBox>
          <AuthBox>
            <Button
              disableRipple
              onClick={goToGuide}
              sx={{
                color: '#333333',
                '&:hover': {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                },
              }}
            >
              재난 행동요령
            </Button>
            <AuthButton onClick={goToLogin}>로그인 / 회원가입</AuthButton>
          </AuthBox>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor='right'
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          width: drawerWidth,
        }}
      >
        {drawerList}
      </Drawer>
    </Box>
  );
};

export default Navbar;
