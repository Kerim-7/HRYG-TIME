"use client";

import Image from "next/image";
import Nav from "./components/Nav";
import BackgroundMusic from "./components/BackgroundMusic";
import { useState, useEffect } from "react";
import { useLanguage } from './contexts/LanguageContext';

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

// Массив всех изображений с ключами для переводов
const allImages = [
  {
    src: "/images/2025-08-13 00.38.33.jpg",
    translationKey: "nationalColoring"
  },
  {
    src: "/images/2025-08-13 00.38.26.jpg",
    translationKey: "coffeeCorner"
  },
  {
    src: "/images/2025-08-13 00.38.23.jpg",
    translationKey: "hearthWarmth"
  },
  {
    src: "/images/2025-08-13 00.38.21.jpg",
    translationKey: "berryFreshness"
  },
  {
    src: "/images/2025-08-13 00.38.15.jpg",
    translationKey: "warmLight"
  },
  {
    src: "/images/2025-08-13 00.38.57.jpg",
    translationKey: "sweetMorning"
  },
  {
    src: "/images/2025-08-13 00.39.02.jpg",
    translationKey: "coffeeView"
  },
  {
    src: "/images/2025-08-13 00.38.52.jpg",
    translationKey: "windowView"
  },
  {
    src: "/images/2025-08-13 00.38.48.jpg",
    translationKey: "mountainFresh"
  },
  {
    src: "/images/2025-08-13 00.38.44.jpg",
    translationKey: "barMagic"
  },
  {
    src: "/images/2025-08-13 00.38.41.jpg",
    translationKey: "coffeeToGo"
  },
  {
    src: "/images/2025-08-13 00.38.36.jpg",
    translationKey: "mountainCity"
  },
  {
    src: "/images/2025-08-13 00.39.13.jpg",
    translationKey: "villageTea"
  },
  {
    src: "/images/2025-08-13 00.39.10.jpg",
    translationKey: "coffeeWisdom"
  },
  {
    src: "/images/2025-08-13 00.39.07.jpg",
    translationKey: "knowledgeCorner"
  },
  {
    src: "/images/2025-08-13 00.39.04.jpg",
    translationKey: "aromaticBeans"
  }
];

export default function Home() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { t } = useLanguage();

  // Закрываем меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.menu-item')) {
        setOpenMenu(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = (menuId: string) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };


  return (
    <div>
      {/* Навигация */}
      <Nav />
      {/* Фоновая музыка */}
      <BackgroundMusic />
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-b from-primary-100 to-primary-50">
        <div className="ornament absolute inset-0 opacity-30" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="font-heading text-4xl md:text-6xl font-normal tracking-tight text-stone-900">
            {t('hero.title')}
            </h1>
            <p className="mt-4 text-stone-700 text-lg md:text-xl max-w-xl">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#menu" className="inline-flex items-center rounded-full bg-primary-600 text-white px-6 py-3 text-sm font-medium hover:bg-primary-700 transition">
                {t('hero.viewMenu')}
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-stone-300 text-stone-800 px-6 py-3 text-sm font-medium hover:bg-stone-100 transition">
                {t('hero.bookTable')}
              </a>
            </div>
          </div>
          <div className="flex-1 w-full h-64 md:h-96 relative rounded-3xl overflow-hidden ring-1 ring-stone-200">
           <Image
           src="/carpet.jpg"
           alt="Дагестанская башня"
           fill
           priority
           sizes="(max-width: 768px) 100vw, 50vw"
           className="object-cover rounded-[calc(1.5rem-1px)]" 
           // 1.5rem = rounded-3xl (24px), 1px — толщина ring
           />
           <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent" />
          </div>
        </div>
      </header>

      {/* Меню */}
      <Section id="menu">
        <div className="bg-stone-50 rounded-3xl p-8 shadow-lg border border-stone-200">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl">{t('menu.title')}</h2>
            <p className="text-stone-600 mt-2">{t('menu.subtitle')}</p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Кофейные напитки */}
          <div className="menu-item relative">
            <div 
              className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              onClick={() => toggleMenu('coffee')}
            >
              <h3 className="font-heading text-xl text-primary-700 text-center">{t('menu.categories.coffee')}</h3>
              <p className="text-sm text-primary-600 text-center mt-2">
                {openMenu === 'coffee' ? t('menu.clickToHide') : t('menu.clickToView')}
              </p>
            </div>
            
            <div className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 transform ${
              openMenu === 'coffee' 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">{t('menu.categories.coffee')}</h4>
                <div className="space-y-3">
                  {[
                    { key: "espresso", price: "180₽" },
                    { key: "ristretto", price: "180₽" },
                    { key: "doppio", price: "180₽" },
                    { key: "lungo", price: "180₽" },
                    { key: "latte", price: "269₽" },
                    { key: "filterCoffee", price: "199₽" },
                    { key: "americano", price: "199₽" },
                    { key: "flatWhite", price: "239₽" },
                    { key: "vietnameseCoffee200", price: "220₽" },
                    { key: "vietnameseCoffee300", price: "249₽" },
                    { key: "alimCoffee", price: "100₽" },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{t(`menu.items.${item.key}`)}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Раф */}
          <div className="menu-item relative">
            <div 
              className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              onClick={() => toggleMenu('raf')}
            >
              <h3 className="font-heading text-xl text-primary-700 text-center">{t('menu.categories.raf')}</h3>
              <p className="text-sm text-primary-600 text-center mt-2">
                {openMenu === 'raf' ? t('menu.clickToHide') : t('menu.clickToView')}
              </p>
            </div>
            
            <div className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 transform ${
              openMenu === 'raf' 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">{t('menu.categories.raf')}</h4>
                <div className="space-y-3">
                  {[
                    { key: "classicRaf", price: "279₽" },
                    { key: "caramelRaf", price: "289₽" },
                    { key: "lavenderRaf", price: "289₽" },
                    { key: "bananaRaf", price: "289₽" },
                    { key: "amarettoRaf", price: "289₽" },
                    { key: "coconutRaf", price: "289₽" },
                    { key: "hazelnutRaf", price: "289₽" },
                    { key: "halvaRaf", price: "319₽" },
                    { key: "flaxRaf", price: "299₽" },
                    { key: "almondRaf", price: "319₽" },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{t(`menu.items.${item.key}`)}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Капучино */}
          <div className="menu-item relative">
            <div 
              className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              onClick={() => toggleMenu('cappuccino')}
            >
              <h3 className="font-heading text-xl text-primary-700 text-center">{t('menu.categories.cappuccino')}</h3>
              <p className="text-sm text-primary-600 text-center mt-2">
                {openMenu === 'cappuccino' ? t('menu.clickToHide') : t('menu.clickToView')}
              </p>
            </div>
            
            <div className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 transform ${
              openMenu === 'cappuccino' 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">{t('menu.categories.cappuccino')}</h4>
                <div className="space-y-3">
                  {[
                    { key: "classicCappuccino200", price: "219₽" },
                    { key: "classicCappuccino300", price: "259₽" },
                    { key: "bananaMilkCappuccino200", price: "269₽" },
                    { key: "bananaMilkCappuccino300", price: "309₽" },
                    { key: "coconutMilkCappuccino200", price: "269₽" },
                    { key: "coconutMilkCappuccino300", price: "309₽" },
                    { key: "almondMilkCappuccino200", price: "269₽" },
                    { key: "almondMilkCappuccino300", price: "309₽" },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{t(`menu.items.${item.key}`)}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Холодное Кофе */}
          <div className="menu-item relative">
            <div 
              className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              onClick={() => toggleMenu('cold-coffee')}
            >
              <h3 className="font-heading text-xl text-primary-700 text-center">{t('menu.categories.coldCoffee')}</h3>
              <p className="text-sm text-primary-600 text-center mt-2">
                {openMenu === 'cold-coffee' ? t('menu.clickToHide') : t('menu.clickToView')}
              </p>
            </div>
            
            <div className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 transform ${
              openMenu === 'cold-coffee' 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">{t('menu.categories.coldCoffee')}</h4>
                <div className="space-y-3">
                  {[
                    { key: "iceFury", price: "350₽" },
                    { key: "iceLatte", price: "273₽" },
                    { key: "espressoTonic", price: "289₽" },
                    { key: "bumble", price: "339₽" },
                    { key: "iceCoffee", price: "310₽" },
                    { key: "classicGlace", price: "273₽" },
                    { key: "chocolateGlace", price: "289₽" },
                    { key: "coldBrewClassic", price: "279₽" },
                    { key: "coldBrewOrangePassion", price: "299₽" },
                    { key: "coldBrewPomegranate", price: "329₽" },
                    { key: "coldBrewCola", price: "259₽" },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{t(`menu.items.${item.key}`)}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Какао */}
          <div className="menu-item relative">
            <div 
              className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              onClick={() => toggleMenu('cocoa')}
            >
              <h3 className="font-heading text-xl text-primary-700 text-center">{t('menu.categories.cocoa')}</h3>
              <p className="text-sm text-primary-600 text-center mt-2">
                {openMenu === 'cocoa' ? t('menu.clickToHide') : t('menu.clickToView')}
              </p>
            </div>
            
            <div className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 transform ${
              openMenu === 'cocoa' 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">{t('menu.categories.cocoa')}</h4>
                <div className="space-y-3">
                  {[
                    { key: "classicCocoa200", price: "229₽" },
                    { key: "classicCocoa300", price: "289₽" },
                    { key: "coconutMilkCocoa200", price: "279₽" },
                    { key: "coconutMilkCocoa300", price: "339₽" },
                    { key: "almondMilkCocoa200", price: "279₽" },
                    { key: "almondMilkCocoa300", price: "339₽" },
                    { key: "bananaMilkCocoa200", price: "279₽" },
                    { key: "bananaMilkCocoa300", price: "339₽" },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{t(`menu.items.${item.key}`)}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Смузи */}
          <div className="menu-item relative">
            <div 
              className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              onClick={() => toggleMenu('smoothie')}
            >
              <h3 className="font-heading text-xl text-primary-700 text-center">{t('menu.categories.smoothie')}</h3>
              <p className="text-sm text-primary-600 text-center mt-2">
                {openMenu === 'smoothie' ? t('menu.clickToHide') : t('menu.clickToView')}
              </p>
            </div>
            
            <div className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 transform ${
              openMenu === 'smoothie' 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">{t('menu.categories.smoothie')}</h4>
                <div className="space-y-3">
                  {[
                    { key: "sorrelSmoothie", price: "359₽" },
                    { key: "mangoSmoothie", price: "359₽" },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{t(`menu.items.${item.key}`)}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Кофейные шоты */}
          <div className="menu-item relative">
            <div 
              className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              onClick={() => toggleMenu('coffee-shots')}
            >
              <h3 className="font-heading text-xl text-primary-700 text-center">{t('menu.categories.coffeeShots')}</h3>
              <p className="text-sm text-primary-600 text-center mt-2">
                {openMenu === 'coffee-shots' ? t('menu.clickToHide') : t('menu.clickToView')}
              </p>
            </div>
            
            <div className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 transform ${
              openMenu === 'coffee-shots' 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">{t('menu.categories.coffeeShots')}</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                    <span className="font-medium text-stone-800 text-sm">{t('menu.items.coffeeShots')}</span>
                    <span className="font-semibold text-primary-600">449₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Коктейли */}
          <div className="menu-item relative">
            <div 
              className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              onClick={() => toggleMenu('cocktails')}
            >
              <h3 className="font-heading text-xl text-primary-700 text-center">{t('menu.categories.cocktails')}</h3>
              <p className="text-sm text-primary-600 text-center mt-2">
                {openMenu === 'cocktails' ? t('menu.clickToHide') : t('menu.clickToView')}
              </p>
            </div>
            
            <div className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 transform ${
              openMenu === 'cocktails' 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">{t('menu.categories.cocktails')}</h4>
                <div className="space-y-3">
                  {[
                    { key: "milkCocktail", price: "269₽" },
                    { key: "chocolateBananaCocktail", price: "319₽" },
                    { key: "dateBananaCocktail", price: "329₽" },
                    { key: "strawberryCocktail", price: "319₽" },
                    { key: "bananaStrawberryCocktail", price: "329₽" },
                    { key: "chocolateCocktail", price: "319₽" },
                    { key: "bananaCocktail", price: "319₽" },
                    { key: "milkBananaCocktail", price: "319₽" },
                    { key: "raspberryCocktail", price: "319₽" },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{t(`menu.items.${item.key}`)}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Чай */}
          <div className="menu-item relative">
            <div 
              className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              onClick={() => toggleMenu('tea')}
            >
              <h3 className="font-heading text-xl text-primary-700 text-center">{t('menu.categories.tea')}</h3>
              <p className="text-sm text-primary-600 text-center mt-2">
                {openMenu === 'tea' ? t('menu.clickToHide') : t('menu.clickToView')}
              </p>
            </div>
            
            <div className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 transform ${
              openMenu === 'tea' 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">{t('menu.categories.tea')}</h4>
                <div className="space-y-3">
                  {[
                    { key: "classicTea", price: "259₽" },
                    { key: "lemonGingerTea", price: "289₽" },
                    { key: "earlGreyTea", price: "249₽" },
                    { key: "greenTea", price: "269₽" },
                    { key: "seaBuckthornOrangeTea", price: "329₽" },
                    { key: "tiedTea", price: "279₽" },
                    { key: "berryTea", price: "299₽" },
                    { key: "blueTea", price: "299₽" },
                    { key: "authorTea", price: "299₽" },
                    { key: "lezginTea", price: "285₽" },
                    { key: "pomegranateTea", price: "259₽" },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{t(`menu.items.${item.key}`)}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Лимонады */}
          <div className="menu-item relative">
            <div 
              className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              onClick={() => toggleMenu('lemonade')}
            >
              <h3 className="font-heading text-xl text-primary-700 text-center">{t('menu.categories.lemonade')}</h3>
              <p className="text-sm text-primary-600 text-center mt-2">
                {openMenu === 'lemonade' ? t('menu.clickToHide') : t('menu.clickToView')}
              </p>
            </div>
            
            <div className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 transform ${
              openMenu === 'lemonade' 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">{t('menu.categories.lemonade')}</h4>
                <div className="space-y-3">
                  {[
                    { key: "strawberryLemonade", price: "259₽" },
                    { key: "raspberryLemonade", price: "269₽" },
                    { key: "mangoLemonade", price: "259₽" },
                    { key: "sorrelLemonade", price: "269₽" },
                    { key: "seaBuckthornLemonade", price: "329₽" },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{t(`menu.items.${item.key}`)}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Фреши */}
          <div className="menu-item relative">
            <div 
              className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              onClick={() => toggleMenu('fresh')}
            >
              <h3 className="font-heading text-xl text-primary-700 text-center">{t('menu.categories.fresh')}</h3>
              <p className="text-sm text-primary-600 text-center mt-2">
                {openMenu === 'fresh' ? t('menu.clickToHide') : t('menu.clickToView')}
              </p>
            </div>
            
            <div className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 transform ${
              openMenu === 'fresh' 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">{t('menu.categories.fresh')}</h4>
                <div className="space-y-3">
                  {[
                    { key: "appleFresh", price: "249₽" },
                    { key: "carrotFresh", price: "249₽" },
                    { key: "orangeFresh", price: "269₽" },
                    { key: "grapefruitFresh", price: "289₽" },
                    { key: "pomegranateFresh", price: "289₽" },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{t(`menu.items.${item.key}`)}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Мохито */}
          <div className="menu-item relative">
            <div 
              className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              onClick={() => toggleMenu('mojito')}
            >
              <h3 className="font-heading text-xl text-primary-700 text-center">{t('menu.categories.mojito')}</h3>
              <p className="text-sm text-primary-600 text-center mt-2">
                {openMenu === 'mojito' ? t('menu.clickToHide') : t('menu.clickToView')}
              </p>
            </div>
            
            <div className={`absolute top-full left-0 right-0 z-50 transition-all duration-300 transform ${
              openMenu === 'mojito' 
                ? 'opacity-100 visible translate-y-0' 
                : 'opacity-0 invisible translate-y-2 md:group-hover:opacity-100 md:group-hover:visible md:group-hover:translate-y-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">{t('menu.categories.mojito')}</h4>
                <div className="space-y-3">
                  {[
                    { key: "classicMojito", price: "259₽" },
                    { key: "mangoMojito", price: "259₽" },
                    { key: "strawberryMojito", price: "259₽" },
                  ].map((item) => (
                    <div key={item.key} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{t(`menu.items.${item.key}`)}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram */}
        <div className="text-center mt-12 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
          <p className="text-lg text-stone-700 mb-2">{t('menu.instagram.follow')}</p>
          <a href="https://instagram.com/HRYG.TIMECOFFEE" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold text-xl hover:text-primary-700 transition">
            {t('menu.instagram.handle')}
          </a>
        </div>
        </div>
      </Section>

      {/* Галерея */}
      <Section id="gallery">
        <h2 className="font-heading text-3xl md:text-4xl">{t('gallery.title')}</h2>
        <p className="text-stone-600 mt-2 mb-8">{t('gallery.subtitle')}</p>
        
        {/* Крутящаяся лента - первая строка (первые 8 фото) */}
        <div className="relative overflow-hidden mb-6">
          <div className="flex animate-scroll-left">
            {/* Создаем бесконечную ленту с меньшим количеством повторений */}
            {Array.from({ length: 20 }, (_, i) => allImages[i % 8]).map((image, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-80 h-60 mx-3 group relative overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={t(`gallery.images.${image.translationKey}.title`)}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 320px, 320px"
                  className="object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-heading text-lg">{t(`gallery.images.${image.translationKey}.title`)}</h3>
                  <p className="text-sm text-stone-200">{t(`gallery.images.${image.translationKey}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Крутящаяся лента - вторая строка (оставшиеся 8 фото) */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right">
            {/* Создаем бесконечную ленту с меньшим количеством повторений */}
            {Array.from({ length: 20 }, (_, i) => allImages[(i % 8) + 8]).map((image, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-80 h-60 mx-3 group relative overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={t(`gallery.images.${image.translationKey}.title`)}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 320px, 320px"
                  className="object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-heading text-lg">{t(`gallery.images.${image.translationKey}.title`)}</h3>
                  <p className="text-sm text-stone-200">{t(`gallery.images.${image.translationKey}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* История */}
      <Section id="story">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
          <h2 className="font-heading text-3xl md:text-4xl">{t('story.title')}</h2>
            <p className="mt-4 text-stone-700">
              {t('story.paragraph1')}
            </p>
            <p className="mt-4 text-stone-700">
              {t('story.paragraph2')}
            </p>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
            <video
              src="/video.MP4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </Section>

      {/* Контакты */}
      <Section id="contact">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">{t('contact.title')}</h2>
            <p className="mt-4 text-stone-700">{t('contact.address')}</p>
            <div className="mt-4 text-stone-700">
              <p>{t('contact.phone')}</p>
              <p>{t('contact.instagram')}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="font-heading text-xl text-primary-700 mb-4 text-center">{t('contact.formTitle')}</h3>
            <p className="text-sm text-stone-600 mb-4 text-center">{t('contact.formSubtitle')}</p>
            
            {/* Форма контактов временно скрыта
            <form action="/api/contact" method="post" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-stone-600">Имя</label>
                <input id="name" name="name" required placeholder="Ваше имя" className="mt-1 w-full rounded-xl border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary-400" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-stone-600">Телефон</label>
                <input id="phone" name="phone" required placeholder="+7 ___ ___-__-__" className="mt-1 w-full rounded-xl border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary-400" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-stone-600">Сообщение</label>
                <textarea id="message" name="message" rows={4} placeholder="Ваше сообщение" className="mt-1 w-full rounded-xl border border-stone-300 px-3 py-2 outline-none focus:ring-2 focus:ring-primary-400" />
              </div>
              <button className="inline-flex items-center rounded-full bg-primary-600 text-white px-6 py-3 text-sm font-medium hover:bg-primary-700 transition">
                Отправить
              </button>
            </form>
            */}
            
      

          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10 bg-stone-100 border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-600">© {new Date().getFullYear()} HRYG TIME</p>
          <nav className="flex gap-4 text-sm text-stone-700">
            <a href="#menu" className="hover:text-stone-900">{t('nav.menu')}</a>
            <a href="#gallery" className="hover:text-stone-900">{t('nav.gallery')}</a>
            <a href="#story" className="hover:text-stone-900">{t('nav.story')}</a>
            <a href="#contact" className="hover:text-stone-900">{t('nav.contact')}</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}