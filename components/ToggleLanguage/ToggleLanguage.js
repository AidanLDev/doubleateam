import { Image, Text, Box, Center } from '@chakra-ui/react';
import { useEffect } from 'react';
export default function ToggleLanguage({ lang, setLang }) {
  useEffect(() => {
    if (!sessionStorage.getItem('language')) {
      sessionStorage.setItem('language', 'Eng');
      setLang('Eng');
    } else {
      setLang(sessionStorage.getItem('language'));
    }
  }, []);
  return (
    <Center>
      <Box
        onClick={() =>
          setLang(lang => {
            sessionStorage.setItem(
              'language',
              lang !== 'Ind' ? 'Ind' : 'Eng'
            );
            return lang !== 'Ind' ? 'Ind' : 'Eng';
          })
        }
        cursor='pointer'
      >
        {
          <Text color='primary'>
            {lang !== 'Ind'
              ? 'klik di sini untuk mengubah bahasa Indonesia'
              : 'Click here to change the language to English'}
          </Text>
        }
        <Image
          src={
            lang !== 'Ind' ? '/images/Ind.png' : '/images/Eng.avif'
          }
          alt='Translate Flags'
          w='350px'
          h='200px'
        />
      </Box>
    </Center>
  );
}
