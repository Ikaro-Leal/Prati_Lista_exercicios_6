import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';

import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import { products as productData } from './data/products.js';
import Button from './components/Button.jsx'; // Mantido: usado em demos (comentadas)

/**
 * Componente principal (Tailwind).
 * - Gerencia tema via useTheme (persistência em localStorage)
 * - Simula carregamento dos produtos (2s)
 * - Exibe Navbar e ProductGrid
 */



function App() {
  const [theme, toggleTheme] = useTheme();

  // Estados de carregamento e produtos
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // Simula fetch com delay para demonstrar skeletons
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productData);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navbar: recebe tema, toggle e contador do carrinho */}
      <Navbar theme={theme} toggleTheme={toggleTheme} cartItemCount={8} />

      {/* Main: utilitários Tailwind (pt = padding-top para navbar fixa) */}
      <main className="pt-[80px] px-md max-w-7xl mx-auto">
        <ProductGrid products={products} isLoading={isLoading} />

        {/*
          Área de Demonstração de Botões (mantida comentada)
          - Finalidade: testar variantes visuais do componente Button.
          - Sugestão: exibir condicionalmente apenas em desenvolvimento:
              {process.env.NODE_ENV === 'development' && ( ...demo... )}
        */}


        {/*
        <div style={{ padding: '40px 0', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
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
