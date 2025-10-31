import { Box, styled, Typography } from '@mui/material';
import type { SafetyDisasterMessages } from '../../../models';
import WarningIcon from '@mui/icons-material/Warning';
import formatRegionNames from '../utils/formatRegionNames';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import DisasterMessageModal from './DisasterMessageModal';

const CARD_HEIGHT = 150;

const AlertCard = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '12px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  minHeight: CARD_HEIGHT,
  '&:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
}));

const AlertHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.palette.text.primary,
  fontWeight: 600,
}));

const MessageContent = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 4,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxHeight: 'calc(1.4em * 4)',
  wordBreak: 'break-word',
});

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
    // EMRG_STEP_NM,
    // SN,
    // DST_SE_NM,
    // MDFCN_YMD,
  } = safetyDisasterMessage;
  const [searchParams, _] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedRegion = searchParams.get('region') || '전체';

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <AlertCard onClick={handleCardClick}>
        <AlertHeader>
          <WarningIcon />
          <Typography variant='subtitle1'>
            {formatRegionNames(RCPTN_RGN_NM, selectedRegion)}
          </Typography>
        </AlertHeader>
        <MessageContent variant='body1'>{MSG_CN}</MessageContent>
        <Typography variant='subtitle1'>발송일시: {CRT_DT}</Typography>
      </AlertCard>

      <DisasterMessageModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        safetyDisasterMessage={safetyDisasterMessage}
      />
    </>
  );
};

export default SafetyDisastermessageCard;
