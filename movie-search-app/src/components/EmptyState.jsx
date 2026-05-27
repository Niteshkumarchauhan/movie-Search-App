const ClapperIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
    />
  </svg>
);

const SearchEmptyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6M15 9l-6 6" />
  </svg>
);

export default function EmptyState({ type = "initial" }) {
  if (type === "no-results") {
    return (
      <div className="fade-in-up opacity-0 flex flex-col items-center gap-4 py-16 text-center">
        <span className="text-gray-600">
          <SearchEmptyIcon />
        </span>
        <div>
          <p className="text-gray-300 font-semibold text-lg">No movies found</p>
          <p className="text-gray-500 text-sm mt-1">
            Try a different title or check your spelling
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 py-20 text-center">
      <div className="relative">
        <span className="text-indigo-500/30">
          <ClapperIcon />
        </span>
        {/* Decorative rings */}
        <div
          className="absolute inset-0 rounded-full border border-indigo-500/10 scale-150 animate-ping"
          style={{ animationDuration: "3s" }}
        />
      </div>
      <div>
        <p className="text-gray-300 font-semibold text-xl">
          Discover your next favourite film
        </p>
        <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto">
          Search by title, franchise, or actor name to explore thousands of
          movies
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {[
          "Inception",
          "The Dark Knight",
          "Interstellar",
          "Avengers",
          "Dune",
        ].map((suggestion) => (
          <span
            key={suggestion}
            className="text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full"
          >
            {suggestion}
          </span>
        ))}
      </div>
    </div>
  );
}
