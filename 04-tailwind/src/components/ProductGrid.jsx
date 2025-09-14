import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';

/**
 * ProductGrid:
 * - grid responsiva usando utilitários Tailwind (mobile-first)
 * - isLoading controla exibição de skeletons
 */


const ProductGrid = ({ products, isLoading }) => {
  const gridClasses = "grid gap-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 mb-8";

  if (isLoading) {
    return (
      <div className={gridClasses} role="status" aria-busy="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className={gridClasses}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
