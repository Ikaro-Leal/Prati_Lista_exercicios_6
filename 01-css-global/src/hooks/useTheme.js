import { useState, useEffect } from 'react';

/**
 * Hook personalizado para gerenciar o tema (light/dark) da aplicação.
 * - Persiste no localStorage
 * - Atualiza o atributo `data-theme` no <html>
 */


export const useTheme = () => {
  // Estado inicial: busca no localStorage, ou usa 'light' como padrão
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  // Atualiza <html> e localStorage sempre que o tema mudar
  useEffect(() => {
    const root = document.documentElement;
    root.removeAttribute('data-theme'); // Evita conflito de atributos
    root.setAttribute('data-theme', theme); // Aplica o novo tema
    localStorage.setItem('theme', theme); // Persiste a escolha
  }, [theme]);

  // Alterna entre light e dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Retorna o estado atual e a função de alternância
  return [theme, toggleTheme];
};
