import styled from 'styled-components';
import { Sun, Moon, ShoppingCart } from 'react-feather';

/**
 * Componentes estilizados para o Navbar.
 * - Mantém a barra fixa no topo e utiliza tokens do tema.
 */



const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 1000;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.25rem 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
`;

const Logo = styled.div`
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color ${({ theme }) => theme.transitionDuration};

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const CartBadge = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryContrast};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
`;

/**
 * Navbar:
 * - props: theme, toggleTheme, cartItemCount
 * - toggleTheme: acionado ao clicar no ThemeToggle
 */
const Navbar = ({ theme, toggleTheme, cartItemCount }) => {
  return (
    <NavbarWrapper>
      <Container>
        <Logo>
          <h2>MiniLoja do Ikaro</h2>
        </Logo>
        <Actions>
          {/* Botão de alternância de tema */}
          <ThemeToggle
            onClick={toggleTheme}
            aria-label="Alternar tema"
            type="button"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </ThemeToggle>

          {/* Carrinho com badge */}
          <CartBadge aria-live="polite">
            <ShoppingCart size={24} aria-hidden="true" />
            {cartItemCount > 0 && (
              <CartCount aria-label={`${cartItemCount} itens no carrinho`}>
                {cartItemCount}
              </CartCount>
            )}
          </CartBadge>
        </Actions>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
