// components/markdown-viewer/table.tsx
export const TableComponent: React.FC<
  React.TableHTMLAttributes<HTMLTableElement>
> = ({ children, ...props }) => {
  return (
    <div className="w-full max-w-[340px] overflow-x-auto sm:max-w-[640px] md:max-w-full">
      <table
        {...props}
        className="my-4 w-full border-collapse divide-y divide-primary/60 border border-primary/30 bg-primary/10 p-1"
      >
        {children}
      </table>
    </div>
  );
};

export const TheadComponent: React.FC<
  React.HTMLAttributes<HTMLTableSectionElement>
> = ({ children, ...props }) => {
  return (
    <thead {...props} className="divide-x bg-primary/10">
      {children}
    </thead>
  );
};

export const TbodyComponent: React.FC<
  React.HTMLAttributes<HTMLTableSectionElement>
> = ({ children, ...props }) => {
  return (
    <tbody {...props} className="divide-x divide-y">
      {children}
    </tbody>
  );
};

export const TrComponent: React.FC<
  React.HTMLAttributes<HTMLTableRowElement>
> = ({ children, ...props }) => {
  return <tr {...props}>{children}</tr>;
};

export const ThComponent: React.FC<
  React.ThHTMLAttributes<HTMLTableCellElement>
> = ({ children, ...props }) => {
  return (
    <th
      {...props}
      className={`border-x border-x-primary/10 px-6 py-3 text-left text-sm font-bold uppercase text-primary/90`}
    >
      {children}
    </th>
  );
};

export const TdComponent: React.FC<
  React.TdHTMLAttributes<HTMLTableCellElement>
> = ({ children, ...props }) => {
  return (
    <td
      {...props}
      className="whitespace-nowrap border border-x-primary/10 border-y-primary/50 px-6 py-2 text-sm"
    >
      {children}
    </td>
  );
};
