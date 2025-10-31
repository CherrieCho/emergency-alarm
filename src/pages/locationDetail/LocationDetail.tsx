import { Box, Typography, Button, styled } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import { CATEGORY_LIST, REGIONS } from './constants';
import SafetyDisastermessageCard from './components/SafetyDisastermessageCard';
import { useState, useEffect } from 'react';
import RegionSelectModal from './components/RegionSelectModal';
import { useSearchParams } from 'react-router-dom';
import useLocationDetailDisasterMessages from '../../hooks/locationDetail/useLocationDetail';
import { useInView } from 'react-intersection-observer';
import SkeletonCards from './components/SkeletonCards';
import Flicking from '@egjs/react-flicking';
import type { DisasterCategory } from '../../models';
import EmptyNotice from './components/EmptyNotice';

const Container = styled(Box)(({ theme }) => ({
  padding: '32px 16px',
  maxWidth: '800px',
  margin: '0 auto',
  backgroundColor: theme.palette.background.default,
  // backgroundColor: 'yellowGreen',
  overflow: 'hidden',
}));

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  marginBottom: '16px',
  color: theme.palette.text.primary,
  cursor: 'pointer',
}));

const TabButton = styled(Button)<{ selected?: boolean }>(
  ({ selected, theme }) => ({
    borderRadius: '9999px',
    color: 'black',
    border: `1px solid ${selected ? theme.palette.primary.main : theme.palette.grey[300]}`,
    padding: '6px 20px',
    marginRight: '8px',
    flexShrink: 0,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  })
);

const FlickingContainer = styled(Box)({
  marginBottom: '24px',

  '.flicking-viewport': {
    overflow: 'visible',
  },
  '.flicking-camera': {
    display: 'flex',
  },
});

const LocationDetail = () => {
  // const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const [modalOpen, setModalOpen] = useState(false);
  // const [isBookMarked, setIsBookMarked] = useState(false);

  const [ref, inView] = useInView();
  const selectedRegion = searchParams.get('region') || '전체';
  const selectedCategory = searchParams.get('category') || '';
  const isAllRegionSelected = selectedRegion === '전체';

  // 선택된 카테고리의 인덱스 계산
  const selectedCategoryIndex = selectedCategory
    ? CATEGORY_LIST.findIndex((category) => category === selectedCategory)
    : 0;

  const {
    data: safetyDisasterMessages,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useLocationDetailDisasterMessages({
    rgnNm: isAllRegionSelected ? '' : selectedRegion,
    category: selectedCategory as DisasterCategory,
  });

  // console.log('지역', safetyDisasterMessages);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // 페이지 진입 시 스크롤을 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedRegion, selectedCategory]);

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

  return (
    <Container>
      <Header>
        <div
          onClick={() => setModalOpen(true)}
          style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          <RoomIcon />
          <Typography variant='h1'>{selectedRegion}</Typography>
        </div>
        {/* {!isAllRegionSelected && (
          <BookMarkButton
            isBookMarked={isBookMarked}
            onClick={() => setIsBookMarked(!isBookMarked)}
          />
        )} */}
      </Header>

      <FlickingContainer>
        <Flicking
          bound={true}
          inputType={['touch', 'mouse']}
          moveType={'freeScroll'}
          defaultIndex={selectedCategoryIndex}
          // bounce={10}
        >
          {CATEGORY_LIST.map((category) => (
            <TabButton
              key={category}
              selected={selectedCategory === category}
              onClick={() => handleSelectCategory(category)}
            >
              {category}
            </TabButton>
          ))}
        </Flicking>
      </FlickingContainer>

      {isPending && <SkeletonCards count={10} />}
      {!isPending && (
        <>
          {!safetyDisasterMessages ||
          safetyDisasterMessages?.pages?.[0]?.body?.length === 0 ||
          safetyDisasterMessages?.pages?.flatMap((page) => page.body || [])
            .length === 0 ? (
            <EmptyNotice />
          ) : (
            <>
              <Box
                display='grid'
                gridTemplateColumns={{
                  xs: '1fr', // 모바일: 1열
                  sm: 'repeat(2, 1fr)', // 태블릿 이상: 2열
                }}
                gap='16px'
              >
                {safetyDisasterMessages?.pages
                  ?.flatMap((page) => page.body || [])
                  .map((message) => (
                    <SafetyDisastermessageCard
                      key={message.SN}
                      safetyDisasterMessage={message}
                    />
                  ))}
              </Box>
              {/* 무한스크롤 트리거 */}
              <Box ref={ref}>
                {isFetchingNextPage && <SkeletonCards count={2} />}
              </Box>
            </>
          )}
        </>
      )}

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
