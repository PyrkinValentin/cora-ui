# ТЗ — @cora-ui/react: дальнейшая работа

> Статус на текущую сессию: P0–P3 в основном выполнены и проверены сборкой. Открыты только
> «шлюзовые» шаги (push/PR/merge, реальный `npm publish`) и крупные задачи (P1.3, P2.1, P2.4).

## 0. Контекст

Публикуемая библиотека UI-компонентов `@cora-ui/react` — React 19, Base UI, Tailwind CSS v4,
сборка tsup. Монорепо (npm workspaces): `packages/react` (библиотека) + `apps/web` (Next.js демо).

## 1. Сделано (ветка `fix/theme-static-tokens`)

- **Токены (`@theme static`)** — было 15/60 теряемых токенов, стало 0/60.
- **Упрочнение упаковки** — убран лишний `tailwindcss` peer-dep; CSS через `@tailwindcss/cli --minify`;
  чистка `exports`.
- **✅ P0.2 — RSC-фикс упаковки.** Сборка без бандлинга (`tsup` `bundle: false`) сохраняет
  `"use client"` пофайлово **нативно** (без плагина); декларации — `tsc -p tsconfig.build.json`
  (rollup-dts OOM'ил на ~286 файлах). Проверено: `Avatar.getInitials` работает в **серверном**
  компоненте из собранного пакета; демо-страница снова server-компонент, `next build` зелёный.
- **✅ P0.3 — Релиз готов.** Версия `1.1.0`; `npm pack`-аудит: 250 js + 250 d.ts, без утечки
  `src`/`node_modules`, токены в опубликованном `styles.css`. (Сам `npm publish` — за владельцем.)
- **✅ P1.1 — Preflight-less стили.** Экспорт `./styles/base` (`@import "tailwindcss/theme.css"` +
  `utilities.css`, без preflight). Демо переведено на него (один reset вместо двух).
- **✅ P1.2 — `./theme` полный.** Дизайн-токены + анимации/keyframes (`scripts/postbuild.mjs`).
- **✅ P2.2 — тёмная тема.** Переключатель `apps/web/src/app/theme-toggle.tsx`.
- **✅ P2.3 — полировка демо.** `metadata`, убран leftover `allowedDevOrigins`.
- **✅ P3.1 — CI.** `.github/workflows/ci.yml`: install → build:lib → build app → lint → tests.
- **✅ P3.2 — тесты.** `vitest`, 14 тестов (clamp, classNames, toDataAttrs, getAvatarInitials).
- **✅ P3.3 — релизы.** `@changesets/cli` + `.changeset/config.json` + root-скрипты
  `changeset`/`version-packages`/`release`.
- **✅ P3.4 — линт.** `.vscode/settings.json` + eslint flat-config для `packages/react`
  (`eslint.config.mjs` с react-hooks); линт чистый, CI линтует оба воркспейса.
- **✅ P1.3 — per-component CSS.** Каждый компонент компилируется изолированно через `@reference`
  (`scripts/build-component-css.mjs`, 54 файла, без preflight/дублей токенов); вайлдкард-экспорт
  `./*/styles` → `@cora-ui/react/<component>/styles`.
- **✅ P2.1 — витрина.** `apps/web` показывает Buttons/Chips/Badges/Switches/Avatars/Alert/Table
  секциями (server-rendered, линт чистый).

## 2. Открытые задачи

### Шлюзовые (только вручную/владельцем)
- **P0.1** — закоммитить, `git push origin fix/theme-static-tokens`, PR → merge в `origin/main`;
  привести локальный `main` (старый Next-app, бэкап `backup/nextjs-app-pre-monorepo`) к монорепо.
- **P0.3 (публикация)** — `npm run release` (или `npm publish` из `packages/react`) — нужен npm-auth.

### Остаётся
- **P2.4** — отдельный док-сайт (per-component страницы, авто-таблицы пропсов, поиск). Сейчас роль
  витрины выполняет `apps/web`; полноценный MDX/Nextra-сайт — отдельная инициатива.

## 3. Критерии приёмки (общие)
- `npm run build` (монорепо) и `npm test` — зелёные. Внешний потребитель: стили + токены +
  server/client. Публикация воспроизводима.

## 4. Заметки
- `bundle: false` → структура `build/` = дерево модулей (250 файлов); `exports` синхронизированы.
- Рабочее дерево ветки сейчас в `/tmp/cora-mono-fix` — после мержа работать из основного чекаута.
- Факты: Tailwind v4 tree-шейкает `@theme` (решение `@theme static`); `bundle: false` сохраняет
  `"use client"` пофайлово; либа шиппит скомпилированный CSS (`./styles` с preflight, `./styles/base` без).
