import styled from 'styled-components';
import { Star } from 'react-feather';
import Button from './Button';

/* ================= Styled components (estrutura visual do Card) ================ */
const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform ${({ theme }) => theme.transitionDuration}, box-shadow ${({ theme }) => theme.transitionDuration};
  position: relative;
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const Tag = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  left: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  z-index: 10;
  background-color: ${({ theme, isPromo }) => isPromo ? theme.colors.tagPromoBg : theme.colors.tagNewBg};
  color: ${({ theme, isPromo }) => isPromo ? theme.colors.tagPromoText : theme.colors.tagNewText};
`;

const ImageContainer = styled.div`
  aspect-ratio: 1 / 1;
  background-color: #f0f0f0;
`;

const CardImage = styled.img`
  width: 100%; height: 100%; object-fit: cover;
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  display: flex; flex-direction: column; flex-grow: 1;
`;

const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  height: 2.5em; line-height: 1.25; overflow: hidden;
  text-overflow: ellipsis; display: -webkit-box;
  -webkit-line-clamp: 2; -webkit-box-orient: vertical;
`;

const Footer = styled.div`
  display: flex; justify-content: space-between; align-items: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const RatingContainer = styled.div`
  display: flex; gap: ${({ theme }) => theme.spacing.xs};
`;

const StyledStar = styled(Star)`
  color: ${({ theme, isFilled }) => isFilled ? theme.colors.starRating : theme.colors.border};
  fill: ${({ theme, isFilled }) => isFilled ? theme.colors.starRating : 'transparent'};
`;

const CardButton = styled(Button)`
  margin-top: auto; /* Empurra o botão para o final do conteúdo */
`;

/* ================= React components (estruturas) ============================ */

/**
 * StarRating:
 * - Mostra 5 estrelas e preenche conforme a nota (rating)
 * - As estrelas são visuais; se for necessário expor para leitores de tela, podemos adicionar texto alternativo
 */
const StarRating = ({ rating }) => (
  <RatingContainer aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <StyledStar key={i} size={16} isFilled={i < rating} />
    ))}
  </RatingContainer>
);

/**
 * ProductCard:
 * - product: { id, image, title, price, rating, tag }
 * - formata o preço para pt-BR e exibe botões/avaliação
 */



const ProductCard = ({ product }) => {
  const { image, title, price, rating, tag } = product;
  const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <CardWrapper>
      {tag && <Tag isPromo={tag === 'Promo'}>{tag}</Tag>}

      <ImageContainer>
        <CardImage src={image} alt={title} loading="lazy" />
      </ImageContainer>

      <Content>
        <Title>{title}</Title>
        <Footer>
          <Price>{formattedPrice}</Price>
          <StarRating rating={rating} />
        </Footer>

        {/* Botão que usa o componente estilizado Button (CardButton) */}
        <CardButton aria-label={`Adicionar ${title} ao carrinho`}>Adicionar</CardButton>
      </Content>
    </CardWrapper>
  );
};

export default ProductCard;
