"use client";

import { useState, useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Устанавливаем фиксированную громкость
    audio.volume = 0.3;

    // Обработчик окончания трека
    const handleEnded = () => {
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Игнорируем ошибки автовоспроизведения
      });
    };

    // Пытаемся запустить музыку сразу при загрузке
    const startMusic = () => {
      audio.play().then(() => {
        // Музыка успешно запущена
      }).catch(() => {
        // Если автовоспроизведение заблокировано, пробуем при первом взаимодействии
        const handleFirstInteraction = () => {
          audio.play().then(() => {
            // Музыка запущена при первом взаимодействии
          }).catch(() => {
            // Игнорируем ошибки
          });
          // Удаляем обработчик после первого взаимодействия
          document.removeEventListener('click', handleFirstInteraction);
          document.removeEventListener('touchstart', handleFirstInteraction);
          document.removeEventListener('keydown', handleFirstInteraction);
          document.removeEventListener('scroll', handleFirstInteraction);
        };

        document.addEventListener('click', handleFirstInteraction, { once: true });
        document.addEventListener('touchstart', handleFirstInteraction, { once: true });
        document.addEventListener('keydown', handleFirstInteraction, { once: true });
        document.addEventListener('scroll', handleFirstInteraction, { once: true });
      });
    };

    audio.addEventListener('ended', handleEnded);

    // Запускаем музыку сразу
    startMusic();

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.muted = false;
      setIsMuted(false);
    } else {
      audio.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Кнопка выключения звука */}
      <button
        onClick={toggleMute}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
          isMuted 
            ? 'bg-stone-100 text-stone-600 hover:bg-stone-200' 
            : 'bg-primary-600 text-white hover:bg-primary-700'
        }`}
        title={isMuted ? 'Включить звук' : 'Выключить звук'}
      >
        {isMuted ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-2.793a1 1 0 011.617.793zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L4.5 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.5l3.883-2.793a1 1 0 011.617.793z" clipRule="evenodd" />
            <path d="M12 8v4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M14 6v8" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M16 4v12" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        )}
      </button>

      {/* Скрытый аудио элемент */}
      <audio
        ref={audioRef}
        preload="auto"
        loop
        autoPlay
      >
        <source src="/Тимур Китов - Хонга (shanson.ws).mp3" type="audio/mpeg" />
        Ваш браузер не поддерживает аудио элемент.
      </audio>
    </div>
  );
}
