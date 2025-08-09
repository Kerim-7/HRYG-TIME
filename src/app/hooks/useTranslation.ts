"use client";

import { useState, useEffect } from 'react';
import ruTranslations from '../locales/ru.json';
import enTranslations from '../locales/en.json';

const translations = {
  ru: ruTranslations,
  en: enTranslations,
};

export type Locale = 'ru' | 'en';

export function useTranslation() {
  const [locale, setLocale] = useState<Locale>('ru');

  useEffect(() => {
    // Получаем сохраненный язык из localStorage
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'ru' || savedLocale === 'en')) {
      setLocale(savedLocale);
    }
  }, []);

  const t = (key: string) => {
    const keys = key.split('.');
    let value: unknown = translations[locale];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key not found: ${key} for locale: ${locale}`);
        return key; // Возвращаем ключ, если перевод не найден
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const changeLocale = (newLocale: Locale) => {
    console.log(`Changing locale from ${locale} to ${newLocale}`);
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return {
    t,
    locale,
    changeLocale,
  };
}
