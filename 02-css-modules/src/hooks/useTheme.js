import { useState, useEffect } from 'react';

export const useTheme = () => {
  // 1. Estado inicial do tema:
  //    - Tenta recuperar do localStorage
  //    - Se não houver valor salvo, usa "light" como padrão


  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // 2. Efeito colateral que roda sempre que "theme" mudar
  useEffect(() => {
    const root = document.documentElement; // Referência para a tag <html>
    
    // 3. Remove qualquer configuração anterior de tema
    root.removeAttribute('data-theme');

    // 4. Define o atributo "data-theme" na tag <html>
    //    -> Isso permite que o CSS (tokens.css) reaja a essa mudança
    root.setAttribute('data-theme', theme);
    
    // 5. Persiste a escolha no localStorage (para manter após recarregar a página)
    localStorage.setItem('theme', theme);
  }, [theme]); 

  // 6. Função para alternar entre os temas disponíveis
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 7. Retorna:
  //    - o tema atual
  //    - a função que alterna entre eles
  return [theme, toggleTheme];
};
