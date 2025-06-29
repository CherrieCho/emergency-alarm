import { Box, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const EmptyNotice = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      py={8}
      textAlign='center'
    >
      <InfoIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
      <Typography variant='h6' color='text.secondary' gutterBottom>
        해당하는 재난 문자가 없습니다
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        선택한 지역과 카테고리에 대한 재난 정보가 없습니다.
      </Typography>
    </Box>
  );
};

export default EmptyNotice;
