import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm";
}

export function Button({
  variant = "default",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "outline"
      ? "border border-gray-300 bg-white hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700";

  const sizeClass =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : "px-4 py-2";

  return (
    <button
      className={`rounded-md ${variantClass} ${sizeClass} ${className}`}
      {...props}
    />
  );
}
