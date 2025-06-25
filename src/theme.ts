import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ED2C3D',
    },
    secondary: {
      main: '#FDE4E6',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    grey: {
      100: '#F5F5F5', //카드 배경색 등
      300: '#D2D2D2', //border 색상
      700: '#333333',
    },
  },
  typography: {
    fontFamily: 'SUIT, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '24px',
    },
    h2: {
      fontWeight: 600,
      fontSize: '20px',
    },
    body1: {
      fontSize: '14px',
    },
    subtitle1: {
      fontSize: '12px',
      color: '#666666',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          textTransform: 'none',
        },
        containedSecondary: {
          backgroundColor: '#ED2C3D',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#E41D5A',
          },
        },
        sizeLarge: {
          padding: '8px 32px',
          fontWeight: 700,
          fontSize: '16px',
        },
      },
    },
  },
});

export default theme;
