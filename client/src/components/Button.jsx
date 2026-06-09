import './Button.css';

/**
 * Button — supports anchor or button rendering.
 * @param {'primary'|'ghost'} [variant]
 * @param {string} [href]  render as <a> when provided
 */
export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...rest
}) {
  const cls = `btn btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a className={cls} href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
