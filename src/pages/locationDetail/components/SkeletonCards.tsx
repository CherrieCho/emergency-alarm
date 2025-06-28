import { Box } from '@mui/material';
import SkeletonCard from './SkeletonCard';

interface SkeletonCardsProps {
  count: number;
}

const SkeletonCards = ({ count }: SkeletonCardsProps) => {
  return (
    <Box
      display='grid'
      gridTemplateColumns={{
        xs: '1fr', // 모바일: 1열
        sm: 'repeat(2, 1fr)', // 태블릿 이상: 2열
      }}
      gap='16px'
      marginTop='16px'
    >
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={`skeleton-${index}`} />
      ))}
    </Box>
  );
};

export default SkeletonCards;
