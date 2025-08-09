"use client";

import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export default function LanguageSwitcher() {
  const { locale, changeLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Перемещаем languages внутрь компонента, чтобы он обновлялся при изменении языка
  const languages = [
    { code: 'ru', name: t('language.ru') },
    { code: 'en', name: t('language.en') }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-stone-300 bg-white/80 backdrop-blur hover:bg-white transition-all duration-200 text-sm font-medium text-stone-700 hover:text-stone-900"
        aria-label="Переключить язык"
      >
        <span className="w-5 h-5 flex items-center justify-center">
          {locale === 'ru' ? '🇷🇺' : '🇺🇸'}
        </span>
        <span className="hidden sm:inline">{currentLanguage?.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-lg border border-stone-200 py-2 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                console.log(`LanguageSwitcher: Switching to ${language.code}`);
                changeLocale(language.code as 'ru' | 'en');
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-sm hover:bg-stone-50 transition-colors ${
                locale === language.code ? 'text-primary-600 font-medium' : 'text-stone-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-4 h-4">
                  {language.code === 'ru' ? '🇷🇺' : '🇺🇸'}
                </span>
                {language.name}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
