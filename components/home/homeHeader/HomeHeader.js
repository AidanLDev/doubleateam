import { Heading, Box } from '@chakra-ui/react';

import styles from './styles.module.scss';

export default function HomeHeader() {
  return (
    <Box
      p='180px 6%'
      zIndex='20'
      pos='relative'
      bottom='75px'
      className={styles.headingContainer}
    >
      <Heading
        as='h1'
        fontSize='11vw'
        color='primary'
        cursor='default'
        className={styles.heading}
      >
        Double A Team
      </Heading>
    </Box>
  );
}
