import React, { useState, useEffect } from 'react';

export default function useSetLang() {
  const [lang, setLang] = useState();
  useEffect(() => {
    setLang(sessionStorage.getItem('language'));
  }, []);
  return lang;
}
