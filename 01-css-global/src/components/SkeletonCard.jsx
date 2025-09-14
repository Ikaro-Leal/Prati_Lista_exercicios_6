// src/components/SkeletonCard.jsx

/**
 * Cartão esqueleto utilizado durante o carregamento.
 * Mantém a mesma estrutura de ProductCard, mas com placeholders.
 */


const SkeletonCard = () => {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton-footer">
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
        </div>
        <div className="skeleton skeleton-button"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
