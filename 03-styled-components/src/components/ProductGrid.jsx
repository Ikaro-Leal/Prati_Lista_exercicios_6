import styled from 'styled-components';
import ProductCard from './ProductCard';

import SkeletonCard from './SkeletonCard';

/* Grid responsiva implementada com mobile-first e breakpoints */
const GridWrapper = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: 2rem;
  margin-bottom: 2rem;
  grid-template-columns: 1fr; /* Mobile-first */

  @media (min-width: 481px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

/**
 * ProductGrid:
 * - products: array de produtos
 * - isLoading: exibe skeletons enquanto true
 */


const ProductGrid = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <GridWrapper role="status" aria-busy="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </GridWrapper>
    );
  }
  return (
    <GridWrapper>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </GridWrapper>
  );
};



export default ProductGrid;
