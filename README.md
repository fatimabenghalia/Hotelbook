# ASCEND — Hotel Website

A luxury hotel marketing site built with React 19, TypeScript, Vite and Tailwind CSS 4.

## Scripts

```bash
npm install
npm run dev      # dev server
npm run build    # typecheck + production build
npm run lint     # eslint
npm run preview  # serve the production build
```

## Pages

Routing is handled by `react-router-dom`. Routes are declared in `src/App.tsx`:

| Path           | Page                       |
| -------------- | -------------------------- |
| `/`            | Home                       |
| `/rooms`       | Rooms & suites             |
| `/experiences` | Experiences                |
| `/dining`      | Restaurants & bar          |
| `/spa`         | Spa & wellness             |
| `/events`      | Private events             |
| `/reserve`     | Reservation request form   |
| `*`            | Not found                  |

## Structure

```
src/
  components/
    home/     sections of the landing page
    layout/   navbar, footer, page shell
    ui/       reusable presentational pieces
  data/       site copy and content collections
  hooks/      scroll / intersection observer hooks
  pages/      one component per route
```

Content (nav links, rooms, page copy) lives in `src/data` so pages stay presentational.
