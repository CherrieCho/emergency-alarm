import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton, Tooltip } from '@mui/material';

interface BookMarkButtonProps {
  isBookMarked: boolean;
  onClick: () => void;
}

const BookMarkButton = ({ isBookMarked, onClick }: BookMarkButtonProps) => {
  return (
    <Tooltip
      title={isBookMarked ? '관심지역 제거' : '관심지역 추가'}
      arrow
      PopperProps={{
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, -10], // 간격을 더 줄임
            },
          },
        ],
      }}
    >
      <IconButton onClick={onClick} sx={{ color: 'primary.main' }}>
        {isBookMarked ? <StarIcon /> : <StarBorderIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default BookMarkButton;
