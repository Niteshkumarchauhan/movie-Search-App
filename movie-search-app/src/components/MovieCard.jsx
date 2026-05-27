import { useState } from "react";

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3.5 h-3.5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3.5 h-3.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const FilmIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 text-gray-600"
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

// Deterministic "rating" derived from imdbID for display purposes
function getPseudoRating(imdbID) {
  if (!imdbID) return "—";
  let hash = 0;
  for (let i = 0; i < imdbID.length; i++)
    hash = imdbID.charCodeAt(i) + ((hash << 5) - hash);
  const rating = 5.5 + (Math.abs(hash) % 45) / 10; // 5.5 – 9.9
  return rating.toFixed(1);
}

export default function MovieCard({ movie }) {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const hasPoster = movie.Poster && movie.Poster !== "N/A" && !imgError;
  const rating = getPseudoRating(movie.imdbID);
  const year = movie.Year || "—";

  return (
    <article
      className="
        fade-in-up opacity-0
        group relative flex flex-col
        bg-gradient-to-b from-white/5 to-white/[0.02]
        border border-white/10 rounded-2xl overflow-hidden
        transition-all duration-300
        hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-900/30
        hover:-translate-y-1.5 hover:scale-[1.02]
        cursor-pointer
      "
    >
      {/* Poster */}
      <div className="relative w-full aspect-[2/3] bg-gray-900 overflow-hidden">
        {/* Skeleton while loading */}
        {!imgLoaded && hasPoster && (
          <div className="absolute inset-0 skeleton" />
        )}

        {hasPoster ? (
          <img
            src={movie.Poster}
            alt={`${movie.Title} poster`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`
              w-full h-full object-cover
              transition-all duration-500
              group-hover:scale-105
              ${imgLoaded ? "opacity-100" : "opacity-0"}
            `}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-gray-800 to-gray-900">
            <FilmIcon />
            <span className="text-xs text-gray-500 text-center px-4">
              No poster available
            </span>
          </div>
        )}

        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Rating badge */}
        <div
          className="
          absolute top-2.5 right-2.5
          flex items-center gap-1
          bg-black/70 backdrop-blur-sm
          text-yellow-400 text-xs font-bold
          px-2 py-1 rounded-lg
          border border-yellow-500/20
        "
        >
          <StarIcon />
          <span>{rating}</span>
        </div>

        {/* IMDB link hint on hover */}
        <div
          className="
          absolute bottom-3 left-0 right-0 flex justify-center
          opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0
        "
        >
          <a
            href={`https://www.imdb.com/title/${movie.imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
              text-xs font-semibold text-white
              bg-yellow-500/90 hover:bg-yellow-400
              px-3 py-1.5 rounded-full
              transition-colors duration-200
            "
          >
            View on IMDb ↗
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 p-4 flex-1">
        <h3
          className="text-white font-semibold text-sm leading-snug line-clamp-2 group-hover:text-indigo-300 transition-colors duration-200"
          title={movie.Title}
        >
          {movie.Title}
        </h3>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="flex items-center gap-1.5 text-gray-400 text-xs">
            <CalendarIcon />
            {year}
          </span>
          <span className="text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full capitalize">
            {movie.Type || "movie"}
          </span>
        </div>
      </div>
    </article>
  );
}
