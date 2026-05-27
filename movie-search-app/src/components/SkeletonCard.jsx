export default function SkeletonCard() {
  return (
    <div className="flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
      {/* Poster skeleton */}
      <div className="w-full aspect-[2/3] skeleton" />

      {/* Info skeleton */}
      <div className="p-4 flex flex-col gap-3">
        <div className="h-3.5 skeleton rounded-full w-full" />
        <div className="h-3.5 skeleton rounded-full w-3/4" />
        <div className="flex justify-between mt-2">
          <div className="h-3 skeleton rounded-full w-16" />
          <div className="h-3 skeleton rounded-full w-12" />
        </div>
      </div>
    </div>
  );
}
