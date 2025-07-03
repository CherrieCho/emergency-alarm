import React, { useState } from 'react';
import {
  TextField,
  Typography,
  Paper,
  Button,
  Box,
  styled,
} from '@mui/material';
import AddressSearch from '../../components/AddressSearch';
import { useNavigate } from 'react-router-dom';
import { backendApi } from '../../utils/backendApi';

const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.background.default,
}));

const SignupCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  maxWidth: 500,
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
}));

const Title = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  textAlign: 'center',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

const LoginLink = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: theme.spacing(2),
}));

const ReadOnlyInput = styled(TextField)({
  marginTop: 8,
});

const Signup = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const navigate = useNavigate();

  //회원가입
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      await backendApi.post('/users/register', {
        email,
        name: nickname,
        password,
        address1,
        address2,
        address3,
      });

      alert('회원 가입이 완료되었습니다!');
      navigate('/login');
    } catch (error) {
      console.error('회원가입 실패:', error);
      alert('회원가입 실패!');
    }
  };

  const handleAddressComplete = (data: any) => {
    const sido = data.sido || '';
    const sigungu = data.sigungu || '';
    const bname = data.bname || '';

    setAddress1(sido);
    setAddress2(sigungu);
    setAddress3(bname);
  };

  return (
    <Wrapper>
      <SignupCard elevation={6}>
        <Title>회원가입</Title>
        <Subtitle>필수 정보를 입력해주세요.</Subtitle>

        <Box component='form' onSubmit={handleSignup}>
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
            label='닉네임'
            margin='normal'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
          <TextField
            fullWidth
            label='비밀번호 확인'
            type='password'
            margin='normal'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <AddressSearch onComplete={handleAddressComplete} />

          <ReadOnlyInput
            fullWidth
            label='주소1 (시/도)'
            margin='dense'
            value={address1}
            InputProps={{ readOnly: true }}
          />
          <ReadOnlyInput
            fullWidth
            label='주소2 (시군구)'
            margin='dense'
            value={address2}
            InputProps={{ readOnly: true }}
          />
          <ReadOnlyInput
            fullWidth
            label='주소3 (읍면동)'
            margin='dense'
            value={address3}
            InputProps={{ readOnly: true }}
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            size='large'
            sx={{ mt: 3 }}
          >
            회원가입 완료
          </Button>

          <LoginLink onClick={() => alert('로그인으로 이동')}>로그인</LoginLink>
        </Box>
      </SignupCard>
    </Wrapper>
  );
};

export default Signup;
