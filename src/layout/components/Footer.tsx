import { Box, Typography, Tooltip } from '@mui/material';
import { styled } from '@mui/system';
import LogoImg from '../../assets/logo.png';
import GitHubIcon from '@mui/icons-material/GitHub';

const TEAM_MEMBERS = [
  { name: '문윤호', url: 'https://github.com/Yunho7058' },
  { name: '이도윤', url: 'https://github.com/DoYoonDev' },
  { name: '조채은', url: 'https://github.com/CherrieCho' },
  { name: '최원석', url: 'https://github.com/choiwonseokgit' },
];

const FooterContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '0',
  backgroundColor: theme.palette.background.paper,
}));

const FooterContents = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  padding: '24px 24px 12px 24px',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'center',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    rowGap: '1em',
    textAlign: 'center',
    justifyItems: 'center',
  },
}));

const LogoImage = styled('img')({
  display: 'block',
  width: '110px',
  height: 'auto',
});

const CenterText = styled(Box)({
  textAlign: 'center',
});

const DevBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: 6,
});

const GithubIconsRow = styled(Box)({
  display: 'flex',
  gap: 8,
});

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: '110px' }}>
          <LogoImage src={LogoImg} alt='logo-image' />
        </Box>
        <CenterText>
          <Typography variant='body2'>
            모두의 안전을 위해, 이재난전해가 함께합니다.
          </Typography>
          <Typography variant='subtitle1' sx={{ color: '#999999' }}>
            © 2025 이재난전해. All Rights Reserved
          </Typography>
        </CenterText>
        <DevBox>
          <GithubIconsRow>
            {TEAM_MEMBERS.map((member) => (
              <Tooltip title={member.name} key={member.url} arrow>
                <a
                  href={member.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ display: 'inline-flex', alignItems: 'center' }}
                >
                  <GitHubIcon fontSize='medium' sx={{ color: '#222' }} />
                </a>
              </Tooltip>
            ))}
          </GithubIconsRow>
        </DevBox>
      </FooterContents>
    </FooterContainer>
  );
};

export default Footer;
