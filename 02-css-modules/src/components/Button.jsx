import styles from './Button.module.css'; // Estilos isolados via CSS Modules

/**
 * Botão reutilizável.
 * - children: conteúdo interno (texto, ícone, etc.)
 * - variant: variação visual ('solid' por padrão)
 * - disabled: se true, desabilita o botão
 * - ...props: permite passar onClick, aria-label, className extra, etc.
 */



const Button = ({ children, variant = 'solid', disabled = false, ...props }) => {
  // Monta as classes usando o objeto styles do CSS Modules.
  // Mantive string template para facilitar futuras adições (ex.: size).
  const classNames = `
    ${styles.button}
    ${styles[`button--${variant}`]}
  `;

  return (
    <button
      className={classNames}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
