"use client";

import { useLanguage } from '../contexts/LanguageContext';
import { useEffect } from 'react';

export default function LanguageUpdater() {
  const { locale } = useLanguage();

  useEffect(() => {
    // Обновляем язык в HTML элементе
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
