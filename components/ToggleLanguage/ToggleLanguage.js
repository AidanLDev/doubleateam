import { Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
export default function ToggleLanguage() {
  const [lang, setLang] = useState();
  useEffect(() => {
    if (!sessionStorage.getItem('language')) {
      sessionStorage.setItem('language', 'Eng');
      setLang('Eng');
    } else {
      setLang(sessionStorage.getItem('language'));
    }
  }, []);
  // TODO: Tooltip
  // TODO: Consistant size
  return (
    <Image
      src={lang === 'Eng' ? '/images/Ind.png' : '/images/Eng.jpg'}
      alt='Translate Flags'
      onClick={() =>
        setLang((lang) => {
          sessionStorage.setItem('language', lang === 'Eng' ? 'Ind' : 'Eng');
          return lang === 'Eng' ? 'Ind' : 'Eng';
        })
      }
    />
  );
}
