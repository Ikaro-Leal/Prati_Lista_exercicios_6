import { Star } from 'react-feather';
import Button from './Button';

/**
 * ProductCard - exibe imagem, título, preço, avaliação e botão de ação.
 * - mantém layout responsivo e acessível.
 */


const StarRating = ({ rating }) => (
  <div className="flex gap-xs" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-star fill-star' : 'text-border'}
        aria-hidden="true"
        focusable="false"
      />
    ))}
  </div>
);

const ProductCard = ({ product }) => {
  const { image, title, price, rating, tag } = product;
  const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const tagClasses = tag === 'Promo'
    ? 'bg-tag-promo-bg text-tag-promo-text'
    : 'bg-tag-new-bg text-tag-new-text';

  return (
    <article className="bg-surface border border-border rounded-md shadow-sm overflow-hidden flex flex-col transition-all duration-DEFAULT hover:-translate-y-1 hover:shadow-lg relative" aria-labelledby={`title-${product.id}`}>
      {tag && (
        <div className={`absolute top-sm left-sm px-sm py-xs rounded-sm text-sm font-semibold z-10 ${tagClasses}`}>
          {tag}
        </div>
      )}

      <div className="aspect-square bg-gray-200">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="p-md flex flex-col flex-grow">
        <h2 id={`title-${product.id}`} className="text-md font-semibold text-text-primary h-[2.5em] leading-tight line-clamp-2">
          {title}
        </h2>

        <div className="flex justify-between items-center mt-sm mb-md">
          <p className="text-lg font-bold text-primary">{formattedPrice}</p>
          <StarRating rating={rating} />
        </div>

        <div className="mt-auto">
          <Button aria-label={`Adicionar ${title} ao carrinho`}>Adicionar</Button>
        </div>
      </div>
    </article>
  );
};


export default ProductCard;
