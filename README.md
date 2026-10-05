# ProScale


![Astro](https://img.shields.io/badge/Astro-2.3-BC52EE?logo=astro&logoColor=fff)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=fff)
![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=000)
![styled-components](https://img.shields.io/badge/styled--components-5.3-db7093?logo=styled-components&logoColor=fff)
![tonal](https://img.shields.io/badge/tonal-5-4ade80)
![Tone.js](https://img.shields.io/badge/Tone.js-14-f59e0b)
![ESLint](https://img.shields.io/badge/ESLint-8-4b32c3?logo=eslint&logoColor=fff)
![Prettier](https://img.shields.io/badge/Prettier-2.8-f7b93e?logo=prettier&logoColor=000)
![Jest](https://img.shields.io/badge/Jest-29-c21325?logo=jest&logoColor=fff)


**Интерактивный помощник для изучения гамм и аккордов на грифе.**

Смотреть тут: https://mike-novum.github.io/proscale-web/

Визуализация нот на грифе гитары (6/7/8 струн), баса и укулеле с поддержкой разных строёв, тональностей и звуковым воспроизведением выбранной гаммы или аккорда.

![ProScale — desktop](./screenshots/desktop.png)

## Возможности

- Поддержка нескольких инструментов: 6-ти, 7-ми, 8-струнная гитара, бас, укулеле
- Альтернативные строи: Standard, Drop D/C/B, Open C/D/G, DADGAD, DDD и другие
- Просмотр гамм и аккордов на грифе
- Воспроизведение выбранной гаммы или аккорда через (на iOS воспроизведение не поддерживается)

## 🚀 Запуск проекта

> Требования: **Node.js 18+** и **npm**.

```bash
# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev

# Сборка продакшен-версии
npm run build

# Локально посмотреть собранную версию
npm run preview
```

### Скрипты

| Команда | Что делает |
|---------|------------|
| `npm run dev` | Запускает Astro dev-сервер с hot reload |
| `npm run build` | Собирает статический сайт в `./dist` |
| `npm run preview` | Локальный просмотр собранного билда |
| `npm run lint` | Прогоняет ESLint по `src` |
| `npm run lint:fix` | ESLint с авто-исправлениями |
| `npm test` | Запускает Jest |
