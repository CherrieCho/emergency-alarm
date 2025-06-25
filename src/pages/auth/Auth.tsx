import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Paper,
  Button,
  Box,
  styled,
} from '@mui/material';

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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('로그인 시도:', { email, password });
  };

  return (
    <Wrapper>
      <LoginCard elevation={6}>
        <Title>재난알림 로그인</Title>
        <Subtitle>이메일과 비밀번호를 입력해주세요.</Subtitle>

        <Box component="form" onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="이메일"
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="비밀번호"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 3 }}
          >
            로그인
          </Button>

          <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
            아직 계정이 없으신가요?
          </Typography>
          <SignupText onClick={() => alert('회원가입으로 이동')}>
            회원가입
          </SignupText>
        </Box>
      </LoginCard>
    </Wrapper>
  );
};

export default Auth;
