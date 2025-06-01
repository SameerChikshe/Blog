import { Skeleton } from "@/components/ui/skeleton";
export function SkeletonCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div
          key={idx}
          className="w-full flex flex-col gap-2 border border-gray-700 p-4 rounded-lg"
        >
          <Skeleton className="h-[160px] w-full bg-gray-200" />
          <Skeleton className="h-[40px] w-full bg-gray-200" />
          <Skeleton className="h-[50px] w-full bg-gray-200" />
        </div>
      ))}
    </div>
  );
}
