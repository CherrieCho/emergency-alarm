import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';

interface BookMarkButtonProps {
  isBookMarked: boolean;
  onClick: () => void;
}

const BookMarkButton = ({ isBookMarked, onClick }: BookMarkButtonProps) => {
  return (
    <IconButton onClick={onClick} sx={{ color: 'primary.main' }}>
      {isBookMarked ? <StarIcon /> : <StarBorderIcon />}
    </IconButton>
  );
};

export default BookMarkButton;
