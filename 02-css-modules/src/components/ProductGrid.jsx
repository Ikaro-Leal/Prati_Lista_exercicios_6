import ProductCard from './ProductCard';
import SkeletonCard from './SkeletonCard';
import styles from './ProductGrid.module.css'; // Módulo de estilos para a grid

/**
 * Exibe uma grade de produtos ou skeletons durante o carregamento.
 * - products: array de produtos (cada produto deve ter id)
 * - isLoading: boolean
 */



const ProductGrid = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <div className={styles.productGrid} role="status" aria-busy="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
