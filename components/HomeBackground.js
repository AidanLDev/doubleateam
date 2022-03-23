import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

/*
  ## Old text styles ##
  text-align: center;
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
*/

export default function HomeBackground() {
  return (
    <Box bg='main' bgImage='url(/images/IstanbulHagiaSopia.jpg)' backgroundPosition="center" backgroundRepeat='no-repeat' h="100%" w="100%" pos="absolute" zIndex="-1" backgroundSize="cover">
    <Link href='/posts/'>
      <Text color='primary'>
        <a>Blogs</a>
      </Text>
    </Link>
      <Heading as='h1' fontSize="11vw" color='primary' p="180px 6%">
        Double A Team
      </Heading>
    </Box>
  )
};