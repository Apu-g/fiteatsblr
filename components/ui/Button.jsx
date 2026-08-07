export default function Button({
  href,
  variant = "primary",
  size = "lg",
  className = "",
  children,
  ...props
}) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-lime text-ink hover:bg-[#d9ff45] animate-glow",
    outline:
      "border-2 border-white/25 text-white hover:border-lime hover:text-lime",
    outlineInk:
      "border-2 border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-lime",
    white:
      "bg-white text-ink hover:bg-lime",
    ghost:
      "border border-white/15 text-white hover:border-lime hover:text-lime",
  };

  const classes = `inline-flex items-center justify-center gap-2 rounded-[12px] font-semibold transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
