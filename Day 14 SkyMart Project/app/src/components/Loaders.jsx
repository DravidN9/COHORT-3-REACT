export function Spinner({ size = 20 }) {
  return (
    <div
      className="border-2 border-[#c9f31d] border-t-transparent rounded-full animate-spin"
      style={{ width: size, height: size }}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-[#161616] rounded-2xl overflow-hidden animate-pulse">
      <div className="aspect-square bg-[#232323]" />
      <div className="p-4 flex flex-col gap-2">
        <div className="h-3 w-1/3 bg-[#232323] rounded" />
        <div className="h-4 w-4/5 bg-[#232323] rounded" />
        <div className="h-3 w-1/2 bg-[#232323] rounded" />
        <div className="h-8 w-full bg-[#232323] rounded-full mt-2" />
      </div>
    </div>
  );
}

export function CategorySkeleton() {
  return <div className="rounded-2xl h-[104px] bg-[#161616] animate-pulse" />;
}
