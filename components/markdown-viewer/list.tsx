export const UlComponent: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({
  children,
  ...props
}) => {
  return (
    <ul {...props} className="mb-4 list-disc pl-4">
      {children}
    </ul>
  );
};

export const OlComponent: React.FC<React.HTMLAttributes<HTMLOListElement>> = ({
  children,
  ...props
}) => {
  return (
    <ol {...props} className="mb-0 list-decimal pl-4">
      {children}
    </ol>
  );
};

export const LiComponent: React.FC<React.LiHTMLAttributes<HTMLLIElement>> = ({
  children,
  ...props
}) => {
  return (
    <li {...props} className="mb-1 pl-4 leading-snug">
      {children}
    </li>
  );
};
