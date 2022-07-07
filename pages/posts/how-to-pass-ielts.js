import { Text } from '@chakra-ui/react';
import BlogLayout from '../../components/blogLayout/BlogLayout';
import BlogTitle from '../../components/BlogTitle';

export default function HowToPassIelts() {
  const blogTitle =
    'How to get an IELTS A1 Certification for UKVI Family Visa Applications';
  return (
    <BlogLayout
      title='Double A Team | How to pass IELTs'
      description={blogTitle}
      postUrl='how-to-pass-ielts'
    >
      <BlogTitle text={blogTitle} />
      <Text>
        Est quis qui elit laborum cillum duis dolor. Nulla duis aute culpa
        cupidatat id ullamco nostrud deserunt enim anim. Ad quis consectetur ad
        veniam ullamco occaecat enim minim tempor sit mollit tempor aliqua.
        Ullamco ex magna cupidatat fugiat Lorem nostrud nostrud fugiat
        incididunt commodo pariatur ex. Culpa esse cillum deserunt et eiusmod
        laboris laboris commodo. Consequat veniam adipisicing non eu fugiat aute
        qui. Occaecat minim quis irure deserunt et officia reprehenderit et
        adipisicing commodo nulla incididunt.
      </Text>
    </BlogLayout>
  );
}
