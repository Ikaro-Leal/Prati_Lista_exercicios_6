import { useState, useEffect } from 'react';
import { useTheme } from './hooks/useTheme';

import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Button from './components/Button';

import styles from './components/App.module.css'; // Estilos locais via CSS Modules
import { products as productData } from './data/products.js'; 



function App() {
  // Hook personalizado para controlar o tema (light/dark)
  const [theme, toggleTheme] = useTheme();

  // Estado para controlar se os produtos ainda estão carregando
  const [isLoading, setIsLoading] = useState(true);

  // Estado para armazenar a lista de produtos após o carregamento
  const [products, setProducts] = useState([]);

  // Número de itens no carrinho (simulado)
  const cartItemCount = 8;

  useEffect(() => {
    // Simula carregamento: define um timer de 2 segundos
    const timer = setTimeout(() => {
      setProducts(productData); // Carrega os produtos mockados
      setIsLoading(false); // Finaliza o estado de loading
    }, 2000);

    // Limpeza do efeito para evitar memória ocupada se o componente desmontar
    return () => clearTimeout(timer);
  }, []); // Executa apenas uma vez no primeiro render



  return (
    <>
      {/* Barra de navegação com troca de tema e badge do carrinho */}
      <Navbar
        theme={theme} 
        toggleTheme={toggleTheme} 
        cartItemCount={cartItemCount}
      />

      {/* Conteúdo principal da página */}
      <main className={styles.mainContent}>
        <ProductGrid products={products} isLoading={isLoading} />

        {/*
          🔹 Área de Demonstração de Botões
          - Mantida apenas como exemplo de uso do componente <Button />
          - Cada variante de botão (solid, outline, ghost) é renderizada
          - Também mostra o comportamento com `disabled`
          - Útil para testes de design/estilo durante o desenvolvimento
        */}
        
        {/*
        <div 
          style={{ 
            padding: '40px 0', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px', 
            alignItems: 'flex-start' 
          }}
        >
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
