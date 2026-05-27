import { useState, useCallback } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import { useMovieSearch } from "./hooks/useMovieSearch";

export default function App() {
  const [hasSearched, setHasSearched] = useState(false);
  const [lastQuery, setLastQuery] = useState("");

  const {
    movies,
    loading,
    error,
    totalResults,
    hasMore,
    searchMovies,
    loadMore,
    clearResults,
  } = useMovieSearch();

  const handleSearch = useCallback(
    (query) => {
      setHasSearched(true);
      setLastQuery(query);
      searchMovies(query, 1);
    },
    [searchMovies],
  );

  const handleClear = useCallback(() => {
    setHasSearched(false);
    setLastQuery("");
    clearResults();
  }, [clearResults]);

  const handleRetry = useCallback(() => {
    if (lastQuery) searchMovies(lastQuery, 1);
  }, [lastQuery, searchMovies]);

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white">
      {/* Ambient background blobs */}
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-purple-900/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-900/10 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Header />

        {/* Search bar */}
        <div className="mb-10">
          <SearchBar
            onSearch={handleSearch}
            onClear={handleClear}
            loading={loading}
          />
        </div>

        {/* Results */}
        <MovieGrid
          movies={movies}
          loading={loading}
          error={error}
          hasMore={hasMore}
          totalResults={totalResults}
          onLoadMore={loadMore}
          onRetry={handleRetry}
          hasSearched={hasSearched}
        />
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 text-gray-600 text-xs border-t border-white/5 mt-8">
        <p>
          Powered by{" "}
          <a
            href="https://www.omdbapi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-500 hover:text-indigo-400 transition-colors"
          >
            OMDb API
          </a>{" "}
          · Built with React + Vite + Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
