export default function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-shimmer" />
          <div className="p-6 space-y-4">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded animate-shimmer w-3/4" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-shimmer w-full" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-shimmer w-2/3" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-shimmer w-1/2" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-shimmer w-1/2" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-shimmer w-1/2" />
            </div>
            <div className="flex gap-2">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-shimmer w-20" />
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-shimmer w-20" />
            </div>
            <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg animate-shimmer" />
          </div>
        </div>
      ))}
    </div>
  )
}
