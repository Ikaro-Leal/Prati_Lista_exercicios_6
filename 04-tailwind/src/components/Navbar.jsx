import { Sun, Moon, ShoppingCart } from 'react-feather';

/**
 * Navbar fixa no topo.
 * Props:
 * - theme: 'light' | 'dark'
 * - toggleTheme: função para alternar tema
 * - cartItemCount: número de itens no carrinho
 */



const Navbar = ({ theme, toggleTheme, cartItemCount }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-surface shadow-md z-[1000] border-b border-border transition-colors duration-DEFAULT py-5 px-0" role="banner">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-md py-sm">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-text-primary">MiniLoja do Ikaro</h1>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-md">
          {/* Botão de Tema */}
          <button
            onClick={toggleTheme}
            className="bg-transparent border-none cursor-pointer text-text-secondary hover:text-text-primary transition-colors duration-DEFAULT"
            aria-label="Alternar tema"
            type="button"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Ícone do Carrinho com badge */}
          <div className="relative text-text-secondary" aria-live="polite" aria-atomic="true">
            <ShoppingCart size={24} aria-hidden="true" />
            {cartItemCount > 0 && (
              <span
                className="absolute -top-2 -right-2 bg-primary text-primary-contrast rounded-full w-5 h-5 flex justify-center items-center text-sm font-semibold"
                aria-label={`${cartItemCount} itens no carrinho`}
              >
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
