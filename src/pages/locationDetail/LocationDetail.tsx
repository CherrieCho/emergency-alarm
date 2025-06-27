import { Box, Typography, Button, styled, useTheme } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import { CATEGORY_LIST, REGIONS } from './constants';
import SafetyDisastermessageCard from './components/SafetyDisastermessageCard';
import { useState } from 'react';
import RegionSelectModal from './components/RegionSelectModal';
import { useSearchParams } from 'react-router-dom';
import useLocationDetailDisasterMessages from '../../hooks/locationDetail/useLocationDetail';

const Container = styled(Box)(({ theme }) => ({
  padding: '16px',
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: theme.palette.background.default,
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '16px',
  color: theme.palette.text.primary,
  cursor: 'pointer',
}));

const Tabs = styled(Box)({
  display: 'flex',
  gap: '8px',
  marginBottom: '24px',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  '&::-webkit-scrollbar': {
    height: '4px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
    borderRadius: '2px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#c1c1c1',
    borderRadius: '2px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#a8a8a8',
  },
});

const TabButton = styled(Button)<{ selected?: boolean }>(
  ({ selected, theme }) => ({
    borderRadius: '9999px',
    color: 'black',
    border: `1px solid ${selected ? theme.palette.primary.main : theme.palette.grey[300]}`,
    padding: '6px 20px',
    flexShrink: 0,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  })
);

const LocationDetail = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const [modalOpen, setModalOpen] = useState(false);

  const selectedRegion = searchParams.get('region') || '전체';
  const selectedCategory = searchParams.get('category');
  const { data: safetyDisasterMessages, isPending } =
    useLocationDetailDisasterMessages({
      rgnNm: selectedRegion === '전체' ? '' : selectedRegion,
    });

  const handleSelectRegion = (newRegion: string) => {
    if (newRegion === '전체') {
      searchParams.delete('region');
      setSearchParams(searchParams);
    } else {
      searchParams.set('region', newRegion);
      setSearchParams(searchParams);
    }
  };

  const handleSelectCategory = (newCategory: string) => {
    if (selectedCategory === newCategory) {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      searchParams.set('category', newCategory);
      setSearchParams(searchParams);
    }
  };

  if (isPending) return <div>Pending...</div>;

  return (
    <Container>
      <Header onClick={() => setModalOpen(true)}>
        <RoomIcon />
        <Typography variant='h1'>{selectedRegion}</Typography>
      </Header>

      <Tabs>
        {CATEGORY_LIST.map((category) => (
          <TabButton
            key={category}
            selected={selectedCategory === category}
            onClick={() => handleSelectCategory(category)}
          >
            {category}
          </TabButton>
        ))}
      </Tabs>

      <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gap='16px'>
        {safetyDisasterMessages?.body.map((message) => (
          <SafetyDisastermessageCard
            key={message.SN}
            safetyDisasterMessage={message}
          />
        ))}
      </Box>

      <RegionSelectModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        regions={REGIONS}
        onSelectRegion={handleSelectRegion}
        onSelectNearby={() => handleSelectRegion('내 주변')}
        selectedRegion={selectedRegion}
      />
    </Container>
  );
};

export default LocationDetail;

/**
   *   {
            "MSG_CN": "[김해시] 김해시 호우주의보 발효중으로 특히 서부지역(진례 등) 많은 비가 내렸으니 지하차도 통행 자제, 농배수로 물꼬작업 등 위험지역 접근 삼가해주시기바랍니다.",
            "RCPTN_RGN_NM": "경상남도 김해시 ",
            "CRT_DT": "2023/09/16 11:41:41",
            "REG_YMD": "2023-09-16",
            "EMRG_STEP_NM": "안전안내",
            "SN": 205172,
            "DST_SE_NM": "호우",
            "MDFCN_YMD": "2023-09-16"
        }
   * 
   * 
   */
