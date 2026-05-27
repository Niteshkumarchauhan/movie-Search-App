const FilmStripIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
    />
  </svg>
);

export default function Header() {
  return (
    <header className="text-center mb-10">
      {/* Logo */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="p-2.5 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
          <FilmStripIcon />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="text-white">Cine</span>
          <span className="text-indigo-400">Search</span>
        </h1>
      </div>

      <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
        Explore millions of movies. Search by title, discover details, and find
        your next watch.
      </p>

      {/* Decorative divider */}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-indigo-500/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/60" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-indigo-500/40" />
      </div>
    </header>
  );
}
