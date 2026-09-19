# 🎬 MovieExplorer

A responsive Movie Explorer application built with React. Users can browse shows, search by title, and view detailed information in a modal.

## Live Demo
https://movie-explorer-pi-cyan.vercel.app

## Features
- Home page with Navbar, Hero banner, and Footer
- Movie Listing page with a responsive grid of reusable cards
- Search by title (updates the grid as you type)
- Details modal with image, summary, rating, release date, genres, language, status and network
- Fully responsive: 1 column on mobile, up to 4 columns on desktop

## Tech Stack
- React (Vite)
- React Router
- Tailwind CSS
- TVMaze API

## API Endpoints Used
- `GET https://api.tvmaze.com/shows`
- `GET https://api.tvmaze.com/search/shows?q=:query`

## Run Locally
```bash
git clone https://github.com/violet-eee/movie-explorer.git
cd movie-explorer
npm install
npm run dev
```

## Author
Faria Tasnim Era
