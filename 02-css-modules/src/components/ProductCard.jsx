import { Star } from 'react-feather';
import Button from './Button';
import styles from './ProductCard.module.css'; // Estilos locais do card

/**
 * Renderiza a avaliação em estrelas (0-5).
 * - rating: inteiro de 0 a 5
 */


const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        size={16}
        className={i < rating ? styles.starFilled : styles.starEmpty}
        aria-hidden="true"
        focusable="false"
      />
    );
  }
  return <div className={styles.starRating} aria-hidden="true">{stars}</div>;
};

/**
 * Card de produto
 * - product: { id, image, title, price, rating, tag }
 */
const ProductCard = ({ product }) => {
  const { image, title, price, rating, tag } = product;

  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  // Combina classes de módulo para a tag (Promo / New)
  const tagClassName = `
    ${styles.cardTag}
    ${tag === 'Promo' ? styles.tagPromo : styles.tagNew}
  `;


    
  return (
    <div className={styles.productCard}>
      {tag && <div className={tagClassName}>{tag}</div>}

      <div className={styles.cardImageContainer}>
        <img src={image} alt={title} className={styles.cardImage} loading="lazy" />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>

        <div className={styles.cardFooter}>
          <p className={styles.cardPrice}>{formattedPrice}</p>
          <StarRating rating={rating} />
        </div>

        {/* Botão de ação: usar Button centralizado do projeto */}
        <Button aria-label={`Adicionar ${title} ao carrinho`}>Adicionar</Button>
      </div>
    </div>
  );
};

export default ProductCard;
