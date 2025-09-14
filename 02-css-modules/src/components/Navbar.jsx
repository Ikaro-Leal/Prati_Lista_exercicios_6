import { Sun, Moon, ShoppingCart } from 'react-feather';
import styles from './Navbar.module.css'; // CSS Modules para isolamento de escopo

/**
 * Navbar com toggle de tema e badge do carrinho.
 * Props:
 * - theme: 'light' | 'dark'
 * - toggleTheme: função para alternar tema
 * - cartItemCount: número de itens no carrinho
 */


const Navbar = ({ theme, toggleTheme, cartItemCount }) => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>MiniLoja do Ikaro</h2>
        </div>

        <div className={styles.actions}>
          {/* Botão para alternar tema */}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Alternar tema"
            type="button"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Ícone do carrinho com contador */}
          <div className={styles.cartBadge} aria-live="polite">
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className={styles.cartCount} aria-label={`${cartItemCount} itens no carrinho`}>
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
