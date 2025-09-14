// Ícones do react-feather (pequenos vetores; requer npm install react-feather)
import { Sun, Moon, ShoppingCart } from 'react-feather';

/**
 * Navbar da aplicação.
 * Props:
 * - theme: 'light' | 'dark' (controla ícone exibido)
 * - toggleTheme: função para alternar o tema
 * - cartItemCount: número de itens no carrinho (badge)
 */


const Navbar = ({ theme, toggleTheme, cartItemCount }) => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* Logo textual simples — pode ser trocado por <img> se tiver asset */}
          <h2>MiniLoja do Ikaro</h2>
        </div>

        <div className="navbar-actions">
          {/* Botão de alternância de tema.
              - Usa a prop toggleTheme fornecida pelo hook useTheme.
              - O ícone depende do tema atual: se está claro, mostramos a lua (indicando que ao clicar vira dark), e vice-versa. */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            type="button"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Badge do carrinho.
              - Só mostra o contador se cartItemCount > 0.
              - A estrutura separa ícone e badge para facilitar estilização absoluta. */}
          <div className="cart-badge" aria-live="polite">
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="cart-count" aria-label={`${cartItemCount} itens no carrinho`}>
                {cartItemCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};



export default Navbar;
