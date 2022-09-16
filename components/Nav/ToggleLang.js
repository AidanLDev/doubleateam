import React, { useState } from 'react';
import i18n from 'i18next';
import Image from 'next/image';
import { Tooltip } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function ToggleLang() {
  const [lang, setLang] = useState(i18n.language);
  const { t } = useTranslation();
  return (
    <Tooltip label={t('toggleLangTooltip')} shouldWrapChildren>
      <Image
        width='80px'
        height='40px'
        src={`/images/${lang === 'en' ? 'Eng.webp' : 'Ind.png'}`}
        alt='Language Flags'
        onClick={() =>
          setLang(curLang => {
            i18n.changeLanguage(curLang === 'en' ? 'id' : 'en');
            return curLang === 'en' ? 'id' : 'en';
          })
        }
        style={{ cursor: 'pointer' }}
      />
    </Tooltip>
  );
}
