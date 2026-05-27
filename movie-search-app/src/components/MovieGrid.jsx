import MovieCard from "./MovieCard";
import SkeletonCard from "./SkeletonCard";
import EmptyState from "./EmptyState";
import ErrorMessage from "./ErrorMessage";

const SKELETON_COUNT = 8;

export default function MovieGrid({
  movies,
  loading,
  error,
  hasMore,
  totalResults,
  onLoadMore,
  onRetry,
  hasSearched,
}) {
  // Initial skeleton (first load)
  if (loading && movies.length === 0) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={onRetry} />;
  }

  if (!hasSearched) {
    return <EmptyState type="initial" />;
  }

  if (movies.length === 0) {
    return <EmptyState type="no-results" />;
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Results count */}
      <p className="text-gray-400 text-sm fade-in-up opacity-0">
        Showing{" "}
        <span className="text-white font-semibold">{movies.length}</span> of{" "}
        <span className="text-white font-semibold">
          {totalResults.toLocaleString()}
        </span>{" "}
        results
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 stagger-children">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={onLoadMore}
            disabled={loading}
            className="
              flex items-center gap-2
              px-8 py-3 rounded-2xl
              bg-white/5 hover:bg-white/10
              border border-white/10 hover:border-indigo-500/40
              text-gray-300 hover:text-white
              font-medium text-sm
              transition-all duration-200 active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full spinner" />
                Loading more…
              </>
            ) : (
              "Load more movies"
            )}
          </button>
        </div>
      )}
    </div>
  );
}
