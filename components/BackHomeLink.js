import Link from 'next/link';
import { Text } from '@chakra-ui/react'

export default function BackHomeLink({ blog }) {
  return (
    <Link href={blog ? '/posts/' : '/'} passHref>
      <Text color='secondary' m='20px 0'><a>{blog ? '← All blogs' : '← Take me home'}</a></Text>
    </Link>
  )
}

