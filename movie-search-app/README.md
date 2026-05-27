<div align="center">

# 🎬 CineSearch — Movie Search App

**A modern, responsive Movie Search App built with React.js, Vite & Tailwind CSS**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![OMDb API](https://img.shields.io/badge/OMDb-API-F5C518?style=for-the-badge&logo=imdb&logoColor=black)](https://www.omdbapi.com/)

[Live Demo](#) · [Report Bug](https://github.com/Niteshkumarchauhan/movie-Search-App/issues) · [Request Feature](https://github.com/Niteshkumarchauhan/movie-Search-App/issues)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Key Concepts](#-key-concepts-demonstrated)
- [Screenshots](#-screenshots)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)

---

## 🎯 About the Project

**CineSearch** is a frontend portfolio project that demonstrates core React concepts through a real-world movie search application. Users can search for any movie by title, browse results in a responsive card grid, and click through to IMDb for full details.

The app is powered by the free [OMDb API](https://www.omdbapi.com/) and showcases:

- ✅ Controlled form inputs
- ✅ Async API calls with Axios
- ✅ Loading skeleton animations
- ✅ Error handling with retry
- ✅ Pagination with load more
- ✅ Clean component architecture
- ✅ Custom React hooks

---

## ✨ Features

| Feature                     | Description                                                    |
| --------------------------- | -------------------------------------------------------------- |
| 🔍 **Smart Search**         | Controlled input with form submission and instant clear button |
| 🎥 **Movie Cards**          | Poster image, title, release year, star rating, and type badge |
| 💀 **Skeleton Loading**     | Shimmer placeholder cards while data is being fetched          |
| ⚠️ **Error Handling**       | Friendly error messages with a one-click retry button          |
| 📄 **Load More**            | Paginated results — fetch 10 at a time, append on demand       |
| 🔗 **IMDb Links**           | Hover a card to reveal a direct link to its IMDb page          |
| 🚫 **Request Cancellation** | AbortController cancels stale requests on new searches         |
| 📱 **Responsive Grid**      | 2 columns on mobile → 6 columns on wide screens                |
| 🎨 **Smooth Animations**    | Fade-in-up with staggered entrance and hover lift effects      |
| 🌙 **Dark UI**              | Deep dark theme with indigo accents and ambient glow blobs     |

---

## 🛠️ Tech Stack

| Technology                               | Version | Purpose                                   |
| ---------------------------------------- | ------- | ----------------------------------------- |
| [React](https://react.dev/)              | 19      | UI component library                      |
| [Vite](https://vitejs.dev/)              | 8       | Lightning-fast build tool & dev server    |
| [Tailwind CSS](https://tailwindcss.com/) | 4       | Utility-first CSS framework               |
| [Axios](https://axios-http.com/)         | 1.x     | Promise-based HTTP client                 |
| [OMDb API](https://www.omdbapi.com/)     | —       | Movie data (title, poster, year, IMDb ID) |

---

## 📁 Project Structure

```
movie-search-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App logo and tagline
│   │   ├── SearchBar.jsx       # Controlled input + submit/clear buttons
│   │   ├── MovieGrid.jsx       # Results grid with results count & load more
│   │   ├── MovieCard.jsx       # Individual movie card with hover effects
│   │   ├── SkeletonCard.jsx    # Shimmer loading placeholder
│   │   ├── EmptyState.jsx      # Initial state & no-results state
│   │   └── ErrorMessage.jsx    # Error display with retry button
│   ├── hooks/
│   │   └── useMovieSearch.js   # Custom hook — all API logic & state
│   ├── App.jsx                 # Root component, wires everything together
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles, Tailwind import & animations
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher
- A free **OMDb API key** → [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)

### 1. Clone the Repository

```bash
git clone https://github.com/Niteshkumarchauhan/movie-Search-App.git
cd movie-Search-App
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Your API Key

Open `src/hooks/useMovieSearch.js` and update line 4:

```js
const API_KEY = "your_omdb_api_key_here";
```

### 4. Start the Development Server

```bash
npm run dev
```

Visit **http://localhost:5173** in your browser.

### 5. Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## 🧠 Key Concepts Demonstrated

### Controlled Form Input

```jsx
const [query, setQuery] = useState("");

<input
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  placeholder="Search for movies..."
/>;
```

### Axios API Call with AbortController

```js
abortRef.current = new AbortController();

const { data } = await axios.get("https://www.omdbapi.com/", {
  params: { apikey: API_KEY, s: query, page },
  signal: abortRef.current.signal,
});
```

### Custom Hook — Separation of Concerns

All API logic, loading/error state, and pagination live in `useMovieSearch.js`. Components only handle rendering — no API code leaks into JSX files.

```js
const { movies, loading, error, hasMore, searchMovies, loadMore } =
  useMovieSearch();
```

### Loading State with Skeleton Cards

```jsx
if (loading && movies.length === 0) {
  return (
    <>
      {Array.from({ length: 8 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </>
  );
}
```

### Error Handling with Retry

```jsx
if (error) {
  return <ErrorMessage message={error} onRetry={handleRetry} />;
}
```

---

## 📸 Screenshots

|                Initial State                 |                Search Results                 |             Error State             |
| :------------------------------------------: | :-------------------------------------------: | :---------------------------------: |
| Animated empty state with search suggestions | Responsive movie card grid with results count | Styled error card with retry button |

---

## 🔮 Future Enhancements

- [ ] Movie detail modal (fetch full info by `imdbID`)
- [ ] Filter by genre, year range, or content type
- [ ] Save favourites to `localStorage`
- [ ] Debounced live search as you type
- [ ] Dark / light theme toggle
- [ ] Deploy to Vercel or Netlify

---

## �‍💻 Author

**Nitesh Kumar Chauhan**

[![GitHub](https://img.shields.io/badge/GitHub-Niteshkumarchauhan-181717?style=for-the-badge&logo=github)](https://github.com/Niteshkumarchauhan)
[![Email](https://img.shields.io/badge/Email-chauhannitesh19@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:chauhannitesh19@gmail.com)

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

Built with ❤️ by **Nitesh Kumar Chauhan** · ⭐ Star this repo if you found it helpful!

</div>
