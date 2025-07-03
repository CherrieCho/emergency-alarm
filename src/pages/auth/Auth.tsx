import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Typography,
  Paper,
  Button,
  Box,
  styled,
  // Snackbar,
  // Alert,
} from '@mui/material';
import { login } from '../../apis/auth';
import { jwtDecode } from 'jwt-decode';

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  fontFamily: theme.typography.fontFamily,
}));

const LoginCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  maxWidth: 420,
  width: '100%',
  backgroundColor: '#fff', // 또는 theme.palette.background.paper
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
}));

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h1,
  textAlign: 'center',
  marginBottom: theme.spacing(1),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

const SignupText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  cursor: 'pointer',
}));

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //로그인 실행
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await login(email, password);
      const { token, user } = response;

      // 로컬 스토리지 저장
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user)); // 서버가 준 user 객체 저장

      navigate('/'); // 로그인 후 이동
    } catch (err: any) {
      alert('로그인 실패: ' + (err.response?.data?.message || err.message));
      console.error('로그인 에러:', err);
    }
  };

  return (
    <Wrapper>
      <LoginCard elevation={6}>
        <Title>재난알림 로그인</Title>
        <Subtitle>이메일과 비밀번호를 입력해주세요.</Subtitle>

        <Box component='form' onSubmit={handleLogin}>
          <TextField
            fullWidth
            label='이메일'
            type='email'
            margin='normal'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label='비밀번호'
            type='password'
            margin='normal'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            size='large'
            sx={{ mt: 3 }}
          >
            로그인
          </Button>

          <Typography variant='body1' textAlign='center' sx={{ mt: 2 }}>
            아직 계정이 없으신가요?
          </Typography>
          <SignupText onClick={() => navigate('/signup')}>회원가입</SignupText>
        </Box>
      </LoginCard>

      {/* <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setOpen(false)} severity="warning" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar> */}
    </Wrapper>
  );
};

export default Auth;
