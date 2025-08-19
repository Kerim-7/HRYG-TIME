# 🚀 Быстрый старт: Деплой на GitHub Pages

## Шаг 1: Загрузите код на GitHub

```bash
git add .
git commit -m "Настройка статического экспорта для GitHub Pages"
git push origin main
```

## Шаг 2: Настройте GitHub Pages

1. Перейдите в ваш репозиторий на GitHub
2. Откройте **Settings** → **Pages**
3. В разделе **Source** выберите:
   - **Deploy from a branch**
   - **Branch**: `gh-pages` (создается автоматически после первого push)
   - **Folder**: `/ (root)`
4. Нажмите **Save**

## Шаг 3: Готово! 🎉

После первого push в ветку `main`:
- GitHub Actions автоматически соберет проект
- Создаст ветку `gh-pages` со статическими файлами
- Сайт будет доступен по адресу: `https://[username].github.io/[repository-name]`

## 🔧 Локальное тестирование

```bash
# Сборка
npm run build

# Локальный сервер
npm run serve

# Открыть в браузере
open http://localhost:8000
```

## 📁 Структура проекта

```
├── .github/workflows/deploy.yml  # GitHub Actions
├── next.config.ts               # Конфигурация статического экспорта
├── out/                         # Статические файлы (создается при сборке)
│   ├── index.html              # Главная страница
│   ├── 404.html                # Страница ошибки
│   └── _next/                  # Ресурсы Next.js
└── src/                        # Исходный код
```

## ⚠️ Важно

- API роуты не работают в статическом режиме
- Форма контактов закомментирована
- Все страницы предварительно рендерятся при сборке
