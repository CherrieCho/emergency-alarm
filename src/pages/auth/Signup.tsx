import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Paper,
  Button,
  Box,
  styled,
} from '@mui/material';
import axios from 'axios';

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
  fontFamily: theme.typography.fontFamily,
}));

const SignupCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  maxWidth: 460,
  width: '100%',
  backgroundColor: '#fff',
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

const LoginLink = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  cursor: 'pointer',
}));

const Signup = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users`, {
        email,
        name: nickname,
      });

      console.log('회원가입 성공:', response.data);
      alert('회원가입 성공!');
      // 성공 후 이동하거나 초기화 가능
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입 실패! 서버 확인해주세요.');
    }
  };

  return (
    <Wrapper>
      <SignupCard elevation={6}>
        <Title>회원가입</Title>
        <Subtitle>필수 정보를 입력해주세요.</Subtitle>

        <Box component="form" onSubmit={handleSignup}>
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
            label="닉네임"
            margin="normal"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
          <TextField
            fullWidth
            label="비밀번호 확인"
            type="password"
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            회원가입 완료
          </Button>

          <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
            이미 계정이 있으신가요?
          </Typography>
          <LoginLink onClick={() => alert('로그인으로 이동')}>
            로그인
          </LoginLink>
        </Box>
      </SignupCard>
    </Wrapper>
  );
};

export default Signup;
