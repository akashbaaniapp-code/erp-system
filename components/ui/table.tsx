import * as React from "react";

export function Table({
  className = "",
  ...props
}: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="w-full overflow-auto">
      <table
        className={`w-full caption-bottom text-sm ${className}`}
        {...props}
      />
    </div>
  );
}

export function TableHeader(
  props: React.HTMLAttributes<HTMLTableSectionElement>
) {
  return <thead {...props} />;
}

export function TableBody(
  props: React.HTMLAttributes<HTMLTableSectionElement>
) {
  return <tbody {...props} />;
}

export function TableFooter(
  props: React.HTMLAttributes<HTMLTableSectionElement>
) {
  return <tfoot {...props} />;
}

export function TableRow(
  props: React.HTMLAttributes<HTMLTableRowElement>
) {
  return <tr {...props} />;
}

export function TableHead(
  props: React.ThHTMLAttributes<HTMLTableCellElement>
) {
  return <th className="p-2 text-left font-medium" {...props} />;
}

export function TableCell(
  props: React.TdHTMLAttributes<HTMLTableCellElement>
) {
  return <td className="p-2" {...props} />;
}

export function TableCaption(
  props: React.HTMLAttributes<HTMLTableCaptionElement>
) {
  return <caption className="mt-4 text-sm text-gray-500" {...props} />;
}
