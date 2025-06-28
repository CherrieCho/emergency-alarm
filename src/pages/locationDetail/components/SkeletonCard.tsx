import { Box, Skeleton, styled } from '@mui/material';

const SkeletonCardWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

const SkeletonCard = () => {
  return (
    <SkeletonCardWrapper>
      <Box display='flex' alignItems='center' gap='8px'>
        <Skeleton variant='circular' width={20} height={20} />
        <Skeleton variant='text' width={120} height={24} />
      </Box>
      <Skeleton variant='text' width='100%' height={60} />
      <Skeleton variant='text' width={150} height={20} />
    </SkeletonCardWrapper>
  );
};

export default SkeletonCard;
