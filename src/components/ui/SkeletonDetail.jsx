import { Skeleton } from "@/components/ui/skeleton";
export function SkeletonDetail() {
  return (
    <div className="flex flex-col gap-4 border border-gray-700 p-6 rounded-lg mb-6 w-full">
      <Skeleton className="h-8 bg-gray-200" />
      <Skeleton className="h-12 bg-gray-200" />
      <Skeleton className="h-[256px] rounded-xl bg-gray-200" />
      <Skeleton className="h-4 bg-gray-200" />
      <Skeleton className="h-20 bg-gray-200" />
      <Skeleton className="h-4 bg-gray-200" />
      <Skeleton className="h-20 bg-gray-200" />
    </div>
  );
}
