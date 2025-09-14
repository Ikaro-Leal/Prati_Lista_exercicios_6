
/**
 * Componente Button usando utilitários Tailwind.
 * - variant: 'solid' | 'outline' | 'ghost'
 * - disabled: boolean
 * - children: conteúdo (texto/ícone)
 *
 * Observação: aqui o botão é full-width (w-full). Se desejar comportamento inline,
 * remova 'w-full' ou passe uma classe via props (className) para sobrescrever.
 */




const Button = ({ children, variant = 'solid', disabled = false, ...props }) => {
  // Estilos base aplicados a todos os botões
  const baseStyles = 'w-full px-md py-sm rounded-sm cursor-pointer font-semibold text-md text-center transition-colors duration-DEFAULT inline-flex justify-center items-center';

  // Estilos específicos para cada variante
  const variantStyles = {
    solid: 'bg-primary text-primary-contrast border border-primary hover:bg-primary-hover hover:border-primary-hover',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-primary-contrast',
    ghost: 'bg-transparent text-primary border border-transparent hover:bg-surface',
  };

  // Estados de foco e desabilitado
  const stateStyles = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed';

  // Concatena classes — manter assim é ok; para projetos maiores recomendo `clsx`/`classnames`
  const className = `${baseStyles} ${variantStyles[variant]} ${stateStyles}`;

  return (
    <button
      className={className}
      disabled={disabled}
      aria-pressed="false"
      {...props}
    >
      {children}
    </button>
  );
};



export default Button;
