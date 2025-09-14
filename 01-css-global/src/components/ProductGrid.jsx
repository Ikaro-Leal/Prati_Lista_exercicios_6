import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';

/**
 * Grid de produtos.
 * - products: array de produtos (cada item deve ter id)
 * - isLoading: boolean que controla exibição de skeletons
 */


const ProductGrid = ({ products, isLoading }) => {
  // Se estiver carregando, renderiza skeletons para dar feedback visual
  if (isLoading) {
    return (
      <div className="product-grid" role="status" aria-busy="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  // Quando carregado, mapeia os produtos
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
