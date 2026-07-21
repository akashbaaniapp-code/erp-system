import * as React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export function Card({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-sm ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`p-6 flex flex-col gap-1 ${className}`}
      {...props}
    />
  );
}

export function CardTitle({ className = "", ...props }: HeadingProps) {
  return (
    <h3
      className={`text-lg font-semibold ${className}`}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }: DivProps) {
  return (
    <div
      className={`p-6 pt-0 ${className}`}
      {...props}
    />
  );
}
