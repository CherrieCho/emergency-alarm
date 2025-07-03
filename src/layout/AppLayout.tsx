import { Box, styled } from '@mui/material';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const Layout = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

const AppLayout = () => {
  return (
    <Layout>
      <Box>
        <Navbar />
      </Box>
      <Box
        sx={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          minHeight: 0,
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
