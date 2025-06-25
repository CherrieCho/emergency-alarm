import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from '@mui/material';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('로그인 시도:', { email, password });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: 'background.default' }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 5,
          width: '100%',
          maxWidth: 420,
          backgroundColor: '#FFFFFF',
          borderRadius: 3,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        }}
      >
        <Typography variant="h1" gutterBottom textAlign="center">
          재난알림 로그인
        </Typography>
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
        </Box>
      </Paper>
    </Box>
  );
};

export default Auth;
