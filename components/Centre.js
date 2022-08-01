import { Box } from '@chakra-ui/react';

export default function Centre({ children }) {
  return (
    <Box display='flex' justifyContent='center'>
      {children}
    </Box>
  );
}
