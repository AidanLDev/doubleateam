import Link from 'next/link';
import { Text } from '@chakra-ui/react'

export default function BackHomeLink() {
  return (
    <Link href='/' passHref>
      <Text color='secondary' m='20px 0'><a>← Take me home</a></Text>
    </Link>
  )
}

