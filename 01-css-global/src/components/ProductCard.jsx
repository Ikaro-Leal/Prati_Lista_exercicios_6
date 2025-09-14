import { Star } from 'react-feather';
import Button from './Button'; // Componente reutilizável para ação "Adicionar"

/**
 * Componente auxiliar para renderizar estrelas de avaliação.
 * - rating: número inteiro de 0 a 5
 */



const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        size={16}
        className={i < rating ? 'star-filled' : 'star-empty'}
        aria-hidden="true"
        focusable="false"
      />
    );
  }
  return <div className="star-rating" aria-hidden="true">{stars}</div>;
};

/**
 * Card de produto.
 * - product: objeto com { id, image, title, price, rating, tag }
 */
const ProductCard = ({ product }) => {
  const { image, title, price, rating, tag } = product;

  // Formata o preço para real brasileiro
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <div className="product-card">
      {/* Tag de destaque (ex.: 'Promo' ou 'Novo') */}
      {tag && (
        <div className={`card-tag ${tag === 'Promo' ? 'tag-promo' : 'tag-new'}`}>
          {tag}
        </div>
      )}

      <div className="card-image-container">
        {/* loading="lazy" ajuda na performance ao usar listas */}
        <img src={image} alt={title} className="card-image" loading="lazy" />
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>

        <div className="card-footer">
          <p className="card-price">{formattedPrice}</p>
          <StarRating rating={rating} />
        </div>

        {/* Botão de adicionar ao carrinho:
            - Usa o componente Button centralizado em todo o projeto.
            - Se quiser passar onClick para adicionar ao carrinho, basta receber a prop e repassar: <Button onClick={() => addToCart(product)}> */}
        <Button aria-label={`Adicionar ${title} ao carrinho`}>Adicionar</Button>
      </div>
    </div>
  );
};


export default ProductCard;
