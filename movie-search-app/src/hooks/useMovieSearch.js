import { useState, useCallback, useRef } from "react";
import axios from "axios";

const BASE_URL = "/.netlify/functions/movies";

export function useMovieSearch() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastQuery, setLastQuery] = useState("");
  const abortRef = useRef(null);

  const searchMovies = useCallback(async (query, page = 1) => {
    if (!query.trim()) return;

    // Cancel any in-flight request
    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    setLoading(true);
    setError(null);
    if (page === 1) setMovies([]);

    try {
      const { data } = await axios.get(BASE_URL, {
        params: { s: query.trim(), page, type: "movie" },
        signal: abortRef.current.signal,
      });

      if (data.Response === "True") {
        setMovies((prev) =>
          page === 1 ? data.Search : [...prev, ...data.Search],
        );
        setTotalResults(parseInt(data.totalResults, 10));
        setCurrentPage(page);
        setLastQuery(query);
      } else {
        setError(data.Error || "No movies found.");
        setMovies([]);
        setTotalResults(0);
      }
    } catch (err) {
      if (axios.isCancel(err) || err.name === "CanceledError") return;
      setError(
        "Failed to fetch movies. Please check your connection and try again.",
      );
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMore = useCallback(() => {
    if (lastQuery) searchMovies(lastQuery, currentPage + 1);
  }, [lastQuery, currentPage, searchMovies]);

  const clearResults = useCallback(() => {
    setMovies([]);
    setError(null);
    setTotalResults(0);
    setCurrentPage(1);
    setLastQuery("");
  }, []);

  const hasMore = movies.length < totalResults;

  return {
    movies,
    loading,
    error,
    totalResults,
    hasMore,
    searchMovies,
    loadMore,
    clearResults,
  };
}
