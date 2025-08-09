"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ruTranslations from '../locales/ru.json';
import enTranslations from '../locales/en.json';

const translations = {
  ru: ruTranslations,
  en: enTranslations,
};

export type Locale = 'ru' | 'en';

interface LanguageContextType {
  locale: Locale;
  changeLocale: (newLocale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
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
    console.log(`LanguageContext: Changing locale from ${locale} to ${newLocale}`);
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    // Принудительно вызываем перерендер
    setTimeout(() => {
      console.log(`LanguageContext: Current locale after change: ${newLocale}`);
    }, 0);
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
