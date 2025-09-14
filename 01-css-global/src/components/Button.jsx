// Componente Button simples e reutilizável.
// - children: conteúdo interno (texto, ícone, etc.)
// - variant: variação visual ('solid' por padrão)
// - disabled: controla o estado desabilitado
// - ...props: permite passar onClick, aria-label, className extra, etc.


const Button = ({ children, variant = 'solid', disabled = false, ...props }) => {
  // Constrói a lista de classes CSS dinamicamente.
  // Mantive a template string para facilitar futuras variações (ex.: adicionar size).
  const className = `
    button 
    button--${variant}
  `;

  return (
    <button className={className} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
