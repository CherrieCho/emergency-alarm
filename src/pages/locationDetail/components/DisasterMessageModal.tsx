import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WarningIcon from '@mui/icons-material/Warning';
import type { SafetyDisasterMessages } from '../../../models';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '12px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
  },
}));

const ModalHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.palette.text.primary,
}));

const MessageContent = styled(Typography)({
  lineHeight: 1.6,
  whiteSpace: 'pre-wrap',
  wordBreak: 'keep-all',
});

interface DisasterMessageModalProps {
  open: boolean;
  onClose: () => void;
  safetyDisasterMessage: SafetyDisasterMessages;
}

const DisasterMessageModal = ({
  open,
  onClose,
  safetyDisasterMessage,
}: DisasterMessageModalProps) => {
  const {
    MSG_CN,
    RCPTN_RGN_NM,
    CRT_DT,
    EMRG_STEP_NM,
    DST_SE_NM,
    REG_YMD,
    MDFCN_YMD,
  } = safetyDisasterMessage;

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth='md' fullWidth>
      <DialogTitle sx={{ m: 0, p: 2, pb: 1 }}>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <ModalHeader>
            <WarningIcon />
            <Typography variant='h6'>{RCPTN_RGN_NM}</Typography>
          </ModalHeader>
          <IconButton
            aria-label='close'
            onClick={onClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent
        sx={{ pt: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}
      >
        <MessageContent variant='body1'>{MSG_CN}</MessageContent>
        <Typography variant='subtitle1'>발송일시: {CRT_DT}</Typography>
      </DialogContent>
    </StyledDialog>
  );
};

export default DisasterMessageModal;
