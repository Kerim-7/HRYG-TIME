"use client";

import Image from "next/image";
import Nav from "./components/Nav";
import BackgroundMusic from "./components/BackgroundMusic";
import { useState, useEffect } from "react";

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

// Массив всех изображений с названиями и описаниями
const allImages = [
  {
    src: "/images/2025-08-13 00.38.33.jpg",
    title: "Национальный колорит",
    description: "Ковры и узоры, хранящие традиции"
  },
  {
    src: "/images/2025-08-13 00.38.26.jpg",
    title: "Кофейный уголок",
    description: "Место для уединения с любимым напитком"
  },
  {
    src: "/images/2025-08-13 00.38.23.jpg",
    title: "Тепло очага",
    description: "Кофе и мягкий свет камина для уютных вечеров"
  },
  {
    src: "/images/2025-08-13 00.38.21.jpg",
    title: "Ягодная свежесть",
    description: "Лимонады, в которых вкус лета в каждом глотке"
  },
  {
    src: "/images/2025-08-13 00.38.15.jpg",
    title: "Теплый свет",
    description: "Уют старинных вещей в лучах мягкого заката"
  },
  {
    src: "/images/2025-08-13 00.38.57.jpg",
    title: "Сладкое утро",
    description: "Вафли, ягоды и ароматный капучино под открытым небом"
  },
  {
    src: "/images/2025-08-13 00.39.02.jpg",
    title: "Вид с чашкой кофе",
    description: "Идеальное место, чтобы насладиться вкусом и видом"
  },
  {
    src: "/images/2025-08-13 00.38.52.jpg",
    title: "Вид из окна",
    description: "Атмосфера уюта сквозь стекло в любое время года"
  },
  {
    src: "/images/2025-08-13 00.38.48.jpg",
    title: "Горный фреш",
    description: "Свежесть цитрусов и прохлада горных вершин"
  },
  {
    src: "/images/2025-08-13 00.38.44.jpg",
    title: "Барная магия",
    description: "Свет, дерево и ароматы, создающие настроение"
  },
  {
    src: "/images/2025-08-13 00.38.41.jpg",
    title: "Кофе с собой",
    description: "Для тех, кто берёт тепло в дорогу"
  },
  {
    src: "/images/2025-08-13 00.38.36.jpg",
    title: "Горный город",
    description: "Линии крыш и башен, ожившие в чернильных штрихах"
  },
  {
    src: "/images/2025-08-13 00.39.13.jpg",
    title: "Чай по-деревенски",
    description: "Самовар и закат — традиция, согревающая сердце"
  },
  {
    src: "/images/2025-08-13 00.39.10.jpg",
    title: "Кофейная мудрость",
    description: "Доска с надписью, которая всегда заставит улыбнуться"
  },
  {
    src: "/images/2025-08-13 00.39.07.jpg",
    title: "Уголок знаний",
    description: "Книги и тишина — идеальное сочетание для вдохновения"
  },
  {
    src: "/images/2025-08-13 00.39.04.jpg",
    title: "Ароматные зёрна",
    description: "Источник энергии и вдохновения в каждой чашке"
  }
];

export default function Home() {


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
            HRYG TIME
            </h1>
            <p className="mt-4 text-stone-700 text-lg md:text-xl max-w-xl">
              Спешалти-кофе с душой Кавказа. Вдохновлено горами Дагестана и традициями гостеприимства.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#menu" className="inline-flex items-center rounded-full bg-primary-600 text-white px-6 py-3 text-sm font-medium hover:bg-primary-700 transition">
                Посмотреть меню
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-stone-300 text-stone-800 px-6 py-3 text-sm font-medium hover:bg-stone-100 transition">
                Забронировать стол
              </a>
            </div>
          </div>
          <div className="flex-1 w-full h-64 md:h-96 relative rounded-3xl overflow-hidden ring-1 ring-stone-200">
           <Image
           src="/carpet.jpg"
           alt="Дагестанская башня"
           fill
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
            <h2 className="font-heading text-3xl md:text-4xl">HRYG TIME</h2>
            <p className="text-stone-600 mt-2">Меню кофейни с душой Кавказа</p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Кофейные напитки */}
          <div className="group relative">
            <div className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-xl text-primary-700 text-center">Кофейные напитки</h3>
              <p className="text-sm text-primary-600 text-center mt-2">Наведите для просмотра</p>
            </div>
            
            <div className="absolute top-full left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">Кофейные напитки</h4>
                <div className="space-y-3">
                  {[
                    { title: "Эспрессо", price: "180₽" },
                    { title: "Ристретто", price: "180₽" },
                    { title: "Допио", price: "180₽" },
                    { title: "Лунго", price: "180₽" },
                    { title: "Латте", price: "269₽" },
                    { title: "Фильтр Кофе", price: "199₽" },
                    { title: "Американо", price: "199₽" },
                    { title: "Флет - Уайт", price: "239₽" },
                    { title: "Вьетнамское Кофе (200мл)", price: "220₽" },
                    { title: "Вьетнамское Кофе (300мл)", price: "249₽" },
                    { title: "Кофе от Алима", price: "100₽" },
                  ].map((item) => (
                    <div key={item.title} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{item.title}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Раф */}
          <div className="group relative">
            <div className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-xl text-primary-700 text-center">Раф</h3>
              <p className="text-sm text-primary-600 text-center mt-2">Наведите для просмотра</p>
            </div>
            
            <div className="absolute top-full left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">Раф</h4>
                <div className="space-y-3">
                  {[
                    { title: "Классический", price: "279₽" },
                    { title: "Карамельный", price: "289₽" },
                    { title: "Лавандовый", price: "289₽" },
                    { title: "Банановый", price: "289₽" },
                    { title: "Амаретто", price: "289₽" },
                    { title: "Кокосовый", price: "289₽" },
                    { title: "Фундуковый", price: "289₽" },
                    { title: "Халвовый", price: "319₽" },
                    { title: "Льняной", price: "299₽" },
                    { title: "Миндальный", price: "319₽" },
                  ].map((item) => (
                    <div key={item.title} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{item.title}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Капучино */}
          <div className="group relative">
            <div className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-xl text-primary-700 text-center">Капучино</h3>
              <p className="text-sm text-primary-600 text-center mt-2">Наведите для просмотра</p>
            </div>
            
            <div className="absolute top-full left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">Капучино</h4>
                <div className="space-y-3">
                  {[
                    { title: "Классический (200мл)", price: "219₽" },
                    { title: "Классический (300мл)", price: "259₽" },
                    { title: "На банановом молоке (200мл)", price: "269₽" },
                    { title: "На банановом молоке (300мл)", price: "309₽" },
                    { title: "На кокосовом молоке (200мл)", price: "269₽" },
                    { title: "На кокосовом молоке (300мл)", price: "309₽" },
                    { title: "На миндальном молоке (200мл)", price: "269₽" },
                    { title: "На миндальном молоке (300мл)", price: "309₽" },
                  ].map((item) => (
                    <div key={item.title} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{item.title}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Холодное Кофе */}
          <div className="group relative">
            <div className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-xl text-primary-700 text-center">Холодное Кофе</h3>
              <p className="text-sm text-primary-600 text-center mt-2">Наведите для просмотра</p>
            </div>
            
            <div className="absolute top-full left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">Холодное Кофе</h4>
                <div className="space-y-3">
                  {[
                    { title: "Айс-Фьюри", price: "350₽" },
                    { title: "Айс Латте", price: "273₽" },
                    { title: "Эспрессо - Тоник", price: "289₽" },
                    { title: "Бамбл", price: "339₽" },
                    { title: "Айс - Кофе", price: "310₽" },
                    { title: "Гляссе Классический", price: "273₽" },
                    { title: "Шоколадный Гляссе", price: "289₽" },
                    { title: "Колд-Брю Классический", price: "279₽" },
                    { title: "Колд-Брю Апельсин-Маракуйя", price: "299₽" },
                    { title: "Колд-Брю Гранатовый", price: "329₽" },
                    { title: "Колд-Брю Кола", price: "259₽" },
                  ].map((item) => (
                    <div key={item.title} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{item.title}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Какао */}
          <div className="group relative">
            <div className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-xl text-primary-700 text-center">Какао</h3>
              <p className="text-sm text-primary-600 text-center mt-2">Наведите для просмотра</p>
            </div>
            
            <div className="absolute top-full left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">Какао</h4>
                <div className="space-y-3">
                  {[
                    { title: "Классический (200мл)", price: "229₽" },
                    { title: "Классический (300мл)", price: "289₽" },
                    { title: "На кокосовом молоке (200мл)", price: "279₽" },
                    { title: "На кокосовом молоке (300мл)", price: "339₽" },
                    { title: "На миндальном молоке (200мл)", price: "279₽" },
                    { title: "На миндальном молоке (300мл)", price: "339₽" },
                    { title: "На банановом молоке (200мл)", price: "279₽" },
                    { title: "На банановом молоке (300мл)", price: "339₽" },
                  ].map((item) => (
                    <div key={item.title} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{item.title}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Смузи */}
          <div className="group relative">
            <div className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-xl text-primary-700 text-center">Смузи</h3>
              <p className="text-sm text-primary-600 text-center mt-2">Наведите для просмотра</p>
            </div>
            
            <div className="absolute top-full left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">Смузи</h4>
                <div className="space-y-3">
                  {[
                    { title: "Щавелевый", price: "359₽" },
                    { title: "Манговый", price: "359₽" },
                  ].map((item) => (
                    <div key={item.title} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{item.title}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Кофейные шоты */}
          <div className="group relative">
            <div className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-xl text-primary-700 text-center">Кофейные шоты</h3>
              <p className="text-sm text-primary-600 text-center mt-2">Наведите для просмотра</p>
            </div>
            
            <div className="absolute top-full left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">Кофейные шоты</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                    <span className="font-medium text-stone-800 text-sm">Кофейные шоты</span>
                    <span className="font-semibold text-primary-600">449₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Коктейли */}
          <div className="group relative">
            <div className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-xl text-primary-700 text-center">Коктейли</h3>
              <p className="text-sm text-primary-600 text-center mt-2">Наведите для просмотра</p>
            </div>
            
            <div className="absolute top-full left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">Коктейли</h4>
                <div className="space-y-3">
                  {[
                    { title: "Молочный", price: "269₽" },
                    { title: "Шоколадно-банановый", price: "319₽" },
                    { title: "Финик - Банан", price: "329₽" },
                    { title: "Клубничный", price: "319₽" },
                    { title: "Банан - Клубника", price: "329₽" },
                    { title: "Шоколадный", price: "319₽" },
                    { title: "Банановый", price: "319₽" },
                    { title: "Молочно-банановый", price: "319₽" },
                    { title: "Малиновый", price: "319₽" },
                  ].map((item) => (
                    <div key={item.title} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{item.title}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Чай */}
          <div className="group relative">
            <div className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-xl text-primary-700 text-center">Чай</h3>
              <p className="text-sm text-primary-600 text-center mt-2">Наведите для просмотра</p>
            </div>
            
            <div className="absolute top-full left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">Чай</h4>
                <div className="space-y-3">
                  {[
                    { title: "Классический", price: "259₽" },
                    { title: "Лимон - Имбирь", price: "289₽" },
                    { title: "Эрл Грей", price: "249₽" },
                    { title: "Зеленый Чай", price: "269₽" },
                    { title: "Облепиха - Апельсин", price: "329₽" },
                    { title: "Связанный Чай", price: "279₽" },
                    { title: "Ягодный Чай", price: "299₽" },
                    { title: "Синий Чай", price: "299₽" },
                    { title: "Авторский", price: "299₽" },
                    { title: "Лезгинский", price: "285₽" },
                    { title: "Гранатовый", price: "259₽" },
                  ].map((item) => (
                    <div key={item.title} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{item.title}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Лимонады */}
          <div className="group relative">
            <div className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-xl text-primary-700 text-center">Лимонады</h3>
              <p className="text-sm text-primary-600 text-center mt-2">Наведите для просмотра</p>
            </div>
            
            <div className="absolute top-full left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">Лимонады</h4>
                <div className="space-y-3">
                  {[
                    { title: "Клубничный", price: "259₽" },
                    { title: "Малиновый", price: "269₽" },
                    { title: "Манговый", price: "259₽" },
                    { title: "Щавелевый", price: "269₽" },
                    { title: "Облепиховый", price: "329₽" },
                  ].map((item) => (
                    <div key={item.title} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{item.title}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Фреши */}
          <div className="group relative">
            <div className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-xl text-primary-700 text-center">Фреши</h3>
              <p className="text-sm text-primary-600 text-center mt-2">Наведите для просмотра</p>
            </div>
            
            <div className="absolute top-full left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">Фреши</h4>
                <div className="space-y-3">
                  {[
                    { title: "Яблочный", price: "249₽" },
                    { title: "Морковный", price: "249₽" },
                    { title: "Апельсиновый", price: "269₽" },
                    { title: "Грейпфрут", price: "289₽" },
                    { title: "Гранатовый", price: "289₽" },
                  ].map((item) => (
                    <div key={item.title} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{item.title}</span>
                      <span className="font-semibold text-primary-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Мохито */}
          <div className="group relative">
            <div className="cursor-pointer p-6 rounded-2xl border-2 border-primary-200 bg-gradient-to-br from-primary-50 to-white hover:border-primary-300 hover:shadow-lg transition-all duration-300">
              <h3 className="font-heading text-xl text-primary-700 text-center">Мохито</h3>
              <p className="text-sm text-primary-600 text-center mt-2">Наведите для просмотра</p>
            </div>
            
            <div className="absolute top-full left-0 right-0 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 mt-2 max-h-96 overflow-y-auto">
                <h4 className="font-heading text-lg text-primary-700 mb-4 text-center">Мохито</h4>
                <div className="space-y-3">
                  {[
                    { title: "Классический", price: "259₽" },
                    { title: "Манговый", price: "259₽" },
                    { title: "Клубничный", price: "259₽" },
                  ].map((item) => (
                    <div key={item.title} className="flex justify-between items-center p-2 rounded-lg bg-stone-50 hover:bg-primary-50 transition">
                      <span className="font-medium text-stone-800 text-sm">{item.title}</span>
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
          <p className="text-lg text-stone-700 mb-2">Следите за нами в Instagram</p>
          <a href="https://instagram.com/HRYG.TIMECOFFEE" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-semibold text-xl hover:text-primary-700 transition">
            @HRYG.TIMECOFFEE
          </a>
        </div>
        </div>
      </Section>

      {/* Галерея */}
      <Section id="gallery">
        <h2 className="font-heading text-3xl md:text-4xl">Галерея</h2>
        <p className="text-stone-600 mt-2 mb-8">Погрузитесь в атмосферу нашей кофейни</p>
        
        {/* Крутящаяся лента - первая строка (первые 8 фото) */}
        <div className="relative overflow-hidden mb-6">
          <div className="flex animate-scroll-left">
            {/* Создаем бесконечную ленту: [1,2,3,4,5,6,7,8, 1,2,3,4,5,6,7,8, 1,2,3,4,5,6,7,8, ...] */}
            {Array.from({ length: 100 }, (_, i) => allImages[i % 8]).map((image, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-80 h-60 mx-3 group relative overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-heading text-lg">{image.title}</h3>
                  <p className="text-sm text-stone-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Крутящаяся лента - вторая строка (оставшиеся 8 фото) */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right">
            {/* Создаем бесконечную ленту: [9,10,11,12,13,14,15,16, 9,10,11,12,13,14,15,16, 9,10,11,12,13,14,15,16, ...] */}
            {Array.from({ length: 100 }, (_, i) => allImages[(i % 8) + 8]).map((image, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-80 h-60 mx-3 group relative overflow-hidden rounded-2xl">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-heading text-lg">{image.title}</h3>
                  <p className="text-sm text-stone-200">{image.description}</p>
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
          <h2 className="font-heading text-3xl md:text-4xl">Наша история</h2>
            <p className="mt-4 text-stone-700">
              Мы родились среди гор и перенесли это чувство высоты в чашку кофе. Мы выбираем зёрна с честной ферментацией и бережной обжаркой, чтобы каждая чашка звучала как отголосок вершин — чистым, ярким и вдохновляющим.
            </p>
            <p className="mt-4 text-stone-700">
              Наш кофе — это не просто напиток, а путешествие: от склонов, где растут лучшие сорта, до вашего утра, наполненного гармонией вкуса. Мы верим, что настоящий кофе рождается на стыке страсти к делу и уважения к природе. Поэтому в каждой чашке — не только сила гор, но и тепло рук, которые её создали.
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
            <h2 className="font-heading text-3xl md:text-4xl">Контакты</h2>
            <p className="mt-4 text-stone-700">Ахтынский район, село Хрюг Ежедневно 10:00–23:00.</p>
            <div className="mt-4 text-stone-700">
              <p>Тел: +7 (993) 555-55-44  </p>
              <p>Instagram: @hryg.timecoffee
                
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6">
            <h3 className="font-heading text-xl text-primary-700 mb-4 text-center">Свяжитесь с нами</h3>
            <p className="text-sm text-stone-600 mb-4 text-center">Оставьте сообщение по номеру телефона или в Instagram и мы свяжемся с вами</p>
            
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
            <a href="#menu" className="hover:text-stone-900">Меню</a>
            <a href="#gallery" className="hover:text-stone-900">Галерея</a>
            <a href="#story" className="hover:text-stone-900">История</a>
            <a href="#contact" className="hover:text-stone-900">Контакты</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}