# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

# Three Six Eight — beauty salon app

A React Native (Expo SDK 57) app for a beauty salon, run primarily as a web app via `react-native-web`. Bottom-tab navigation (Home, Services, Blog, Contact) plus a stack for detail/modal screens (About, ServiceDetail, BlogDetail, Appointment).

## Structure

- `src/theme/theme.ts` — single source of truth for colors, spacing, radii, typography. Change colors here, not per-component.
- `src/data/content.ts` — all copy, contact info, services, and blog posts, including `image: require(...)` references. This is the place to edit business content (phone, address, email, service/blog text and photos).
- `src/components/` — shared UI (`Screen`, `Section`, `Button`, `Cards`, `PageHeader`, `Brand`).
- `src/screens/` — one file per screen.
- `src/navigation/` — `RootNavigator.tsx` (stack + tabs), `types.ts` (param lists), `linking.ts` (URL paths per screen — required for the browser back button to work correctly on web).
- `assets/services/`, `assets/blog/` — AI-generated photos per service/post.
- `assets/logo-368.png` — the brand mark used in `Brand.tsx`, sourced from a user-provided line-art image with the background keyed to transparent.

## Local dev server

`npm run web` runs `expo start --web`. **The script sets `CI=1`, which disables Metro's watch mode/hot-reload entirely** — a browser refresh alone will not pick up new file changes. After any code change, kill whatever's on port 8081 and restart:

```
lsof -ti :8081 | xargs -r kill -9
npm run web &
```

The dev server binds `localhost:8081`; it's also reachable from a phone on the same Wi-Fi via the machine's LAN IP.

## Deployment (GitHub Pages)

`npm run deploy` exports the static web build and publishes it to the `gh-pages` branch:

```
GH_PAGES=true npx expo export -p web --output-dir dist && npx gh-pages -d dist -t
```

Live at https://buzzjomy.github.io/three-six-eight-app/

Notes:
- `app.config.js` only applies `experiments.baseUrl` (`/three-six-eight-app`) when `GH_PAGES=true` is set, so local dev at the root path is unaffected.
- `public/index.html` overrides Expo's default web template — it adds `viewport-fit=cover` and uses `100dvh` instead of `100%` for `html`/`body`/`#root`, both needed to avoid mobile browser chrome overlapping the bottom tab bar.
- `public/.nojekyll` and `public/.gitignore` (both empty) are required: GitHub Pages runs Jekyll by default and ignores any `_`-prefixed folder (breaks the `_expo/` bundle) unless `.nojekyll` is present; the `gh-pages` branch can otherwise inherit a stray copy of the repo's root `.gitignore` (which excludes `node_modules/`), which silently drops icon fonts under `assets/node_modules/@expo/vector-icons/`. Both files in `public/` neutralize these on every publish.
- The GitHub repo is public (required for free GitHub Pages).

The `dist/` folder is a build artifact and is gitignored — don't commit it. Deploying doesn't require committing to `master` first, but keep them in sync so the deployed site matches the tracked source.
