import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Divider,
  styled,
} from '@mui/material';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  userId: number;
  name: string;
  email: string;
  exp: number;
  iat: number;
}

const MyPageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxWidth: '1200px',
  margin: '0px auto',
  padding: '50px',
  [theme.breakpoints.down('md')]: {
    padding: '10px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '2px',
  },
}));

const MyPage = () => {
  const token = localStorage.getItem('token');

  let user: DecodedToken | null = null;
  if (token) {
    try {
      user = jwtDecode<DecodedToken>(token);
    } catch (err) {
      console.error('토큰 디코딩 실패:', err);
    }
  }

  return (
    <MyPageContainer>
      <Box display='flex' justifyContent='center' alignItems='center' px={3}>
        <Card sx={{ width: 400, padding: 3 }}>
          <CardContent>
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              gap={2}
            >
              <Avatar sx={{ width: 80, height: 80, fontSize: 32 }}>
                {user?.name?.charAt(0).toUpperCase() || '?'}
              </Avatar>
              <Typography variant='h5' fontWeight={700}>
                {user?.name || '이름 없음'}
              </Typography>
              <Typography variant='body1' color='text.secondary'>
                {user?.email || '이메일 없음'}
              </Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            {user ? (
              <Typography
                textAlign='center'
                variant='body2'
                color='text.secondary'
              >
                회원 ID: {user.userId}
              </Typography>
            ) : (
              <Typography textAlign='center' color='error'>
                로그인 정보가 없습니다.
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    </MyPageContainer>
  );
};

export default MyPage;
