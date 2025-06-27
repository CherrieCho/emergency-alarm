import { Box, styled, Typography } from '@mui/material';
import type { SafetyDisasterMessages } from '../../../models';
import WarningIcon from '@mui/icons-material/Warning';

const AlertCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

const AlertHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.palette.text.primary,
  fontWeight: 600,
}));

interface SafetyDisastermessageCardProps {
  safetyDisasterMessage: SafetyDisasterMessages;
}

const SafetyDisastermessageCard = ({
  safetyDisasterMessage,
}: SafetyDisastermessageCardProps) => {
  const {
    MSG_CN,
    RCPTN_RGN_NM,
    CRT_DT,
    EMRG_STEP_NM,
    SN,
    DST_SE_NM,
    MDFCN_YMD,
  } = safetyDisasterMessage;

  return (
    <AlertCard>
      <AlertHeader>
        <WarningIcon />
        <Typography variant='subtitle1'>[{RCPTN_RGN_NM}]</Typography>
      </AlertHeader>
      <Typography variant='body1'>{MSG_CN}</Typography>
      <Typography variant='subtitle1'>발송일시: {CRT_DT}</Typography>
    </AlertCard>
  );
};

export default SafetyDisastermessageCard;
