
/**
 * Placeholder (skeleton) mostrado durante carregamento.
 * Usa utilitário animate-pulse do Tailwind para efeito shimmer simples.
 */



const SkeletonCard = () => {
  return (
    <div className="bg-surface border border-border rounded-md overflow-hidden" aria-hidden="true">
      <div className="animate-pulse">
        <div className="bg-border aspect-square"></div>
        <div className="p-md">
          <div className="h-[2.5em] bg-border rounded-sm"></div>
          <div className="flex justify-between items-center mt-sm mb-md">
            <div className="h-[1.5em] w-2/5 bg-border rounded-sm"></div>
            <div className="h-[1.5em] w-1/4 bg-border rounded-sm"></div>
          </div>
          <div className="h-[40px] bg-border rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};


export default SkeletonCard;
