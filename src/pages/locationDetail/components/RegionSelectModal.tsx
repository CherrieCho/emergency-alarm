import React from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  styled,
  Modal,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface RegionSelectModalProps {
  open: boolean;
  onClose: () => void;
  regions: string[];
  onSelectRegion: (region: string) => void;
  onSelectNearby: () => void;
  selectedRegion: string;
}

const ModalBox = styled(Box)(({ theme }) => ({
  background: '#fff',
  borderRadius: '24px',
  width: '420px',
  maxWidth: '90vw',
  padding: '40px 24px 24px 24px',
  boxShadow: theme.shadows[5],
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  outline: 'none',
}));

const Title = styled(Typography)({
  fontWeight: 700,
  fontSize: '24px',
  color: '#d3d3d3',
  marginBottom: '24px',
  alignSelf: 'flex-start',
});

const CloseButton = styled(IconButton)({
  position: 'absolute',
  top: 16,
  right: 16,
  '&:focus': {
    outline: 'none',
  },
});

const RegionGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '16px',
  width: '100%',
  marginBottom: '32px',
});

const RegionButton = styled(Button)<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '15px',
    color: '#222',
    padding: '10px 0',
    boxShadow: 'none',
    width: '100%',
    minHeight: '56px',
    border: selected
      ? `1px solid ${theme.palette.primary.main}`
      : `1.5px solid ${theme.palette.grey[300]}`,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
    '&:focus': {
      outline: 'none',
    },
  })
);

const RegionSelectModal: React.FC<RegionSelectModalProps> = ({
  open,
  onClose,
  regions,
  onSelectRegion,
  onSelectNearby,
  selectedRegion,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        zIndex: 1300,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ModalBox>
        <Title variant='h5'>시/도</Title>
        <CloseButton onClick={onClose}>
          <CloseIcon sx={{ color: 'black' }} />
        </CloseButton>
        <RegionGrid>
          {regions.map((region) => (
            <RegionButton
              key={region}
              onClick={() => {
                onSelectRegion(region);
                onClose();
              }}
              selected={selectedRegion === region}
            >
              {region}
            </RegionButton>
          ))}
        </RegionGrid>
        {/* <BottomBox>
          <NearbyButton onClick={onSelectNearby}>내 주변</NearbyButton>
          <DisabledButton disabled>지역을 선택해주세요</DisabledButton>
        </BottomBox> */}
      </ModalBox>
    </Modal>
  );
};

export default RegionSelectModal;
