import { useState } from "react";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
    />
  </svg>
);

const ClearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function SearchBar({ onSearch, onClear, loading }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    onClear();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === "") onClear();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto"
      role="search"
    >
      <div className="relative flex items-center group">
        {/* Search icon */}
        <span className="absolute left-4 text-indigo-400 pointer-events-none transition-colors group-focus-within:text-indigo-300">
          <SearchIcon />
        </span>

        {/* Controlled input */}
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for movies, e.g. Inception, Batman…"
          aria-label="Search movies"
          className="
            w-full pl-12 pr-28 py-4 rounded-2xl
            bg-white/5 border border-white/10
            text-white placeholder-gray-500
            text-base outline-none
            transition-all duration-300
            focus:bg-white/8 focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/20
            hover:border-white/20
          "
        />

        {/* Clear button */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            aria-label="Clear search"
            className="absolute right-[5.5rem] text-gray-500 hover:text-gray-300 transition-colors p-1 rounded-full hover:bg-white/10"
          >
            <ClearIcon />
          </button>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={!query.trim() || loading}
          aria-label="Submit search"
          className="
            absolute right-2
            px-5 py-2.5 rounded-xl
            bg-indigo-600 hover:bg-indigo-500
            disabled:bg-indigo-900 disabled:text-indigo-600 disabled:cursor-not-allowed
            text-white font-semibold text-sm
            transition-all duration-200
            active:scale-95
            glow-pulse
          "
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full spinner" />
              <span>Searching</span>
            </span>
          ) : (
            "Search"
          )}
        </button>
      </div>
    </form>
  );
}
