import { useState, useEffect } from 'react';

import { useTheme } from './hooks/useTheme';

import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';

import Button from './components/Button.jsx';

import { products as productData } from './data/products.js'; 


/**
 * Componente principal da aplicação.
 * Responsável por:
 * - Gerenciar tema (claro/escuro)
 * - Carregar os produtos simulados
 * - Exibir Navbar e lista de produtos
 */


function App() {
  // Hook de tema (retorna o tema atual e a função para alternar)
  const [theme, toggleTheme] = useTheme();

  // Estado de controle de carregamento (exibe skeletons)
  const [isLoading, setIsLoading] = useState(true);

  // Lista de produtos exibidos na grade
  const [products, setProducts] = useState([]);

  // Quantidade de itens no carrinho (simulação fixa neste exercício)
  const cartItemCount = 8;

  // Simula o carregamento de produtos com atraso de 2 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productData);
      setIsLoading(false);
    }, 2000);

    // Limpa o timer caso o componente seja desmontado
    return () => clearTimeout(timer);
  }, []);

  

  return (
    <>
      <Navbar
        theme={theme} 
        toggleTheme={toggleTheme} 
        cartItemCount={cartItemCount}
      />

      <main className="main-content">
        {/* Grade de produtos (recebe lista ou skeletons) */}
        <ProductGrid products={products} isLoading={isLoading} />

        {/* Butão de test */}
        {/* <div style={{ padding: '40px 0', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
          <h2>Demonstração de Botões</h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="solid">Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="solid" disabled>Solid Disabled</Button>
            <Button variant="outline" disabled>Outline Disabled</Button>
            <Button variant="ghost" disabled>Ghost Disabled</Button>
          </div>
        </div>
 */}

      </main>
    </>
  );
}

export default App;
