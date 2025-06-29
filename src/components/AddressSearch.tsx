import { Button, Box } from '@mui/material';

interface Props {
  onComplete: (data: any) => void;
}

declare global {
  interface Window {
    daum: any;
  }
}

const AddressSearch = ({ onComplete }: Props) => {
  const handleClick = () => {
    new window.daum.Postcode({
      oncomplete: (data: any) => {
        onComplete(data);
      },
    }).open();
  };

  return (
    <Box mt={2} mb={2} display="flex" justifyContent="flex-end">
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClick}
        sx={{ fontWeight: 'bold', borderRadius: 2 }}
      >
        주소 검색
      </Button>
    </Box>
  );
};

export default AddressSearch;
