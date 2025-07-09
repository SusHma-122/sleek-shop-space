
import { Skeleton } from "@/components/ui/skeleton";

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
      <Skeleton className="w-full h-56" />
      <div className="p-5">
        <Skeleton className="h-5 w-3/4 mb-3" />
        <Skeleton className="h-4 w-1/2 mb-3" />
        <div className="flex items-center gap-3 mb-4">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-4 w-12" />
        </div>
        <Skeleton className="h-9 w-full" />
      </div>
    </div>
  );
};

export const CategorySkeleton = () => {
  return (
    <div className="h-32 rounded-2xl bg-muted/30 animate-pulse flex flex-col items-center justify-center space-y-3">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="text-center">
        <Skeleton className="h-4 w-16 mb-1" />
        <Skeleton className="h-3 w-12" />
      </div>
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <div className="h-96 bg-muted/30 animate-pulse relative">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <Skeleton className="h-16 w-96 mb-6" />
          <Skeleton className="h-6 w-3/4 mb-8" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};
