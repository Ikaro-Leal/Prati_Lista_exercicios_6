// src/components/Button.jsx
import styled, { css } from 'styled-components';

/**
 * Variantes pré-definidas para o botão.
 * Usamos `css` para manter os blocos organizados e reaproveitáveis.
 */
const variants = {
  solid: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primaryContrast};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
      border-color: ${({ theme }) => theme.colors.primaryHover};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primaryContrast};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid transparent;
    &:hover {
      background-color: ${({ theme }) => theme.colors.surface};
    }
  `,
};

/**
 * StyledButton:
 * - estilos base aplicados em todos os botões
 * - escolhe a variante dinamicamente via prop `variant`
 * - trata estados de foco e disabled
 */
const StyledButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-align: center;
  transition: background-color ${({ theme }) => theme.transitionDuration}, 
              color ${({ theme }) => theme.transitionDuration}, 
              border-color ${({ theme }) => theme.transitionDuration};
  display: inline-flex;
  justify-content: center;
  align-items: center;


  // Aplica a variave conforme a prop -variant- (solid, outline- ghost)
  ${({ variant }) => variants[variant]}

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/**
 * Componente Button
 * - props: variant, children, ...props (onClick, aria-label, etc.)
 * - mantém interface simples; internamente usa StyledButton
 */
const Button = ({ variant = 'solid', children, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
