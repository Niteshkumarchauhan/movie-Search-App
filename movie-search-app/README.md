# 🎬 CineSearch — Movie Search App

A modern, responsive Movie Search App built with **React.js**, **Vite**, and **Tailwind CSS**, powered by the [OMDb API](https://www.omdbapi.com/). Designed as a frontend developer portfolio project demonstrating real-world React patterns.

![CineSearch Preview](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

---

## ✨ Features

- 🔍 **Controlled Search Form** — Real-time controlled input with form submission handling
- 🎥 **Movie Cards** — Displays poster, title, release year, star rating, and type badge
- ⏳ **Loading States** — Skeleton card animations while fetching data
- ❌ **Error Handling** — Friendly error messages with retry functionality
- 📄 **Pagination** — "Load more" button to fetch additional results
- 🔗 **IMDb Links** — Direct link to each movie's IMDb page on hover
- 🚫 **Request Cancellation** — Aborts in-flight requests on new searches using AbortController
- 📱 **Fully Responsive** — 2-column mobile grid up to 6-column desktop layout
- 🎨 **Smooth Animations** — Fade-in-up with staggered card entrance and hover lift effects
- 🌙 **Dark Theme** — Deep dark UI with ambient glow effects

---

## 🛠️ Tech Stack

| Technology     | Purpose                 |
| -------------- | ----------------------- |
| React 19       | UI library              |
| Vite 8         | Build tool & dev server |
| Tailwind CSS 4 | Utility-first styling   |
| Axios          | HTTP requests           |
| OMDb API       | Movie data source       |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # App logo and tagline
│   ├── SearchBar.jsx       # Controlled input form
│   ├── MovieGrid.jsx       # Results grid with load more
│   ├── MovieCard.jsx       # Individual movie card
│   ├── SkeletonCard.jsx    # Loading placeholder card
│   ├── EmptyState.jsx      # Initial & no-results states
│   └── ErrorMessage.jsx    # Error display with retry
├── hooks/
│   └── useMovieSearch.js   # Custom hook — API logic, state, pagination
├── App.jsx                 # Root component
├── main.jsx                # Entry point
└── index.css               # Global styles + Tailwind + animations
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Free OMDb API key from [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)

### Installation

```bash
# Clone the repository
git clone https://github.com/Niteshkumarchauhan/movie-search-app.git

# Navigate into the project
cd movie-search-app

# Install dependencies
npm install
```

### Configure API Key

Open `src/hooks/useMovieSearch.js` and replace the API key:

```js
const API_KEY = "your_omdb_api_key_here";
```

### Run the App

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🎯 Key Concepts Demonstrated

### Controlled Forms

```jsx
const [query, setQuery] = useState("");
<input value={query} onChange={(e) => setQuery(e.target.value)} />;
```

### Axios API Handling with AbortController

```js
abortRef.current = new AbortController();
const { data } = await axios.get(BASE_URL, {
  params: { apikey: API_KEY, s: query },
  signal: abortRef.current.signal,
});
```

### Custom Hook for Separation of Concerns

All API logic, loading state, error state, and pagination live in `useMovieSearch.js`, keeping components clean and focused on rendering.

---

## 📸 Screenshots

| Initial State                         | Search Results             | Error State                    |
| ------------------------------------- | -------------------------- | ------------------------------ |
| Animated empty state with suggestions | Responsive movie card grid | Styled error with retry button |

---

## 🔮 Possible Enhancements

- [ ] Movie detail modal (fetch by `imdbID`)
- [ ] Filter by genre, year, or type
- [ ] Save favourites to `localStorage`
- [ ] Dark / light theme toggle
- [ ] Debounced live search as you type

---

## 📄 License

MIT © [Nitesh Kumar Chauhan](https://github.com/Niteshkumarchauhan)

---

> Built with ❤️ as a frontend portfolio project
