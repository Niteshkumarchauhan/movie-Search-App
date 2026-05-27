const AlertIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
    />
  </svg>
);

export default function ErrorMessage({ message, onRetry }) {
  return (
    <div
      role="alert"
      className="
        fade-in-up opacity-0
        flex flex-col items-center gap-4
        max-w-md mx-auto text-center
        bg-red-500/10 border border-red-500/30
        rounded-2xl p-8
      "
    >
      <span className="text-red-400">
        <AlertIcon />
      </span>
      <div>
        <p className="text-red-300 font-semibold text-base mb-1">
          Something went wrong
        </p>
        <p className="text-red-400/80 text-sm">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="
            mt-2 px-5 py-2 rounded-xl
            bg-red-500/20 hover:bg-red-500/30
            border border-red-500/30 hover:border-red-500/50
            text-red-300 hover:text-red-200
            text-sm font-medium
            transition-all duration-200 active:scale-95
          "
        >
          Try again
        </button>
      )}
    </div>
  );
}
