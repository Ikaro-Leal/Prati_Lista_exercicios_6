import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import Button from './components/Button';
import { products as productData } from './data/products.js';

/**
 * Container principal estilizado via styled-components.
 * - Usa tokens do tema (spacing) para consistência entre temas.
 * - Mantém um max-width centralizado para layout.
 */


const MainContent = styled.main`
  padding-top: 80px;
  padding-left: ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.md};
  max-width: 1280px;
  margin: 0 auto;
`;

function App() {
  // Hook de tema: retorna o tema atual ('light' | 'dark') e a função toggleTheme
  const [theme, toggleTheme] = useTheme();
  // currentTheme é o objeto de tema usado pelo ThemeProvider
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  // Estados de carregamento e produtos (fornecidos no exercício)
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  // Simula carregamento dos produtos (2s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(productData);
      setIsLoading(false);
    }, 2000);

    // Limpeza do timer ao desmontar
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      {/* GlobalStyles injeta estilos base e tokens (dependendo do tema) */}
      <GlobalStyles />
      <>
        {/* Navbar: recebe tema, função para alternar e badge do carrinho */}
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
          cartItemCount={8}
        />

        {/* Conteúdo principal com espaçamento controlado pelo tema */}
        <MainContent>
          <ProductGrid products={products} isLoading={isLoading} />



          {/*
            🔹 Área de Demonstração de Botões (mantida comentada)
            - Finalidade: testar visual e variantes do componente Button.
            - Mantida em comentário para uso em desenvolvimento/design.
            - Recomendação: condicionar a renderização a NODE_ENV === 'development'
              se quiser que apareça apenas em ambiente de desenvolvimento.
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
        </MainContent>
      </>
    </ThemeProvider>
  );
}

export default App;
