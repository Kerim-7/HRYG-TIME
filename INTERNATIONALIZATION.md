# Интернационализация (i18n) для HRYG TIME

## Обзор

Проект поддерживает два языка: русский (ru) и английский (en). Интернационализация реализована с помощью клиентского хука `useTranslation` и файлов переводов.

## Структура файлов

```
src/app/
├── locales/
│   ├── ru.json     # Русские переводы
│   └── en.json     # Английские переводы
├── hooks/
│   └── useTranslation.ts  # Хук для работы с переводами
└── components/
    └── LanguageSwitcher.tsx  # Компонент переключателя языка
```

## Использование

### 1. Импорт хука

```tsx
import { useTranslation } from './hooks/useTranslation';

export default function MyComponent() {
  const { t, locale, changeLocale } = useTranslation();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
}
```

### 2. Добавление переводов

Для добавления нового перевода:

1. Добавьте ключ в `src/app/locales/ru.json`:
```json
{
  "newSection": {
    "title": "Новый заголовок",
    "description": "Новое описание"
  }
}
```

2. Добавьте соответствующий перевод в `src/app/locales/en.json`:
```json
{
  "newSection": {
    "title": "New Title",
    "description": "New Description"
  }
}
```

3. Используйте в компоненте:
```tsx
{t('newSection.title')}
{t('newSection.description')}
```

### 3. Переключатель языка

Компонент `LanguageSwitcher` автоматически добавляется в навигацию. Он показывает:
- Флаг текущего языка
- Название языка (скрыто на мобильных устройствах)
- Выпадающее меню для выбора языка

## Особенности

- **Локальное хранение**: Выбранный язык сохраняется в `localStorage`
- **Автоматическое определение**: При первом посещении используется русский язык
- **Адаптивный дизайн**: Переключатель адаптируется под размер экрана
- **Статический экспорт**: Система работает с `output: 'export'` в Next.js

## Структура переводов

### Навигация
- `nav.menu` - Меню
- `nav.gallery` - Галерея
- `nav.story` - История
- `nav.contact` - Контакты

### Главная секция
- `hero.title` - Заголовок
- `hero.subtitle` - Подзаголовок
- `hero.viewMenu` - Кнопка "Посмотреть меню"
- `hero.bookTable` - Кнопка "Забронировать стол"

### Меню
- `menu.title` - Заголовок меню
- `menu.subtitle` - Подзаголовок меню
- `menu.categories.*` - Категории меню
- `menu.clickToView` - "Нажмите для просмотра"
- `menu.clickToHide` - "Нажмите чтобы скрыть"

### Галерея
- `gallery.title` - Заголовок галереи
- `gallery.subtitle` - Подзаголовок галереи

### История
- `story.title` - Заголовок истории
- `story.paragraph1` - Первый абзац
- `story.paragraph2` - Второй абзац

### Контакты
- `contact.title` - Заголовок контактов
- `contact.address` - Адрес
- `contact.phone` - Телефон
- `contact.instagram` - Instagram
- `contact.formTitle` - Заголовок формы
- `contact.formSubtitle` - Подзаголовок формы

## Добавление нового языка

1. Создайте новый файл `src/app/locales/[locale].json`
2. Добавьте переводы по аналогии с существующими файлами
3. Обновите хук `useTranslation.ts`:
   ```tsx
   const translations = {
     ru: ruTranslations,
     en: enTranslations,
     [newLocale]: newTranslations, // Добавьте новый язык
   };
   ```
4. Обновите компонент `LanguageSwitcher.tsx`:
   ```tsx
   const languages = [
     { code: 'ru', name: t('language.ru') },
     { code: 'en', name: t('language.en') },
     { code: newLocale, name: t(`language.${newLocale}`) }, // Добавьте новый язык
   ];
   ```

## Тестирование

1. Запустите проект: `npm run dev`
2. Откройте браузер и перейдите на `http://localhost:3000`
3. Найдите переключатель языка в правом верхнем углу навигации
4. Проверьте переключение между языками
5. Обновите страницу и убедитесь, что выбранный язык сохраняется
