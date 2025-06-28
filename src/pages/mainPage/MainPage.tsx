import { Stack, styled } from '@mui/material';
import MainBanner from './components/MainBanner';
import DisasterSlide from './components/DisasterSlide';
import RegionDisasterInfo from './components/RegionDisasterInfo';
import DisasterTypeInfo from './components/DisasterTypeInfo';

const StyledStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  maxWidth: '1200px',
  margin: '0px auto',
  padding: '50px',
  paddingTop: 0,
  [theme.breakpoints.down('md')]: {
    padding: '10px',
    paddingTop: 0,
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2px',
    paddingTop: 0,
  },
}));

const MainPage = () => {
  return (
    <>
      <StyledStack spacing={2}>
        <MainBanner />
        <DisasterSlide />
        <RegionDisasterInfo />
        <DisasterTypeInfo />
      </StyledStack>
    </>
  );
};

export default MainPage;
