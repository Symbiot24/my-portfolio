"use client";

import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", padding = "md", hover = false, children, ...props }, ref) => {
    const variantClasses = {
      default: "bg-bg-card border border-border",
      elevated: "bg-bg-card border border-border shadow-xl",
      outlined: "bg-transparent border-2 border-border",
    }[variant];

    const paddingClasses = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    }[padding];

    const hoverClasses = hover ? "transition-all duration-200 hover:border-border-hover hover:shadow-lg" : "";

    return (
      <div
        ref={ref}
        className={`${variantClasses} ${paddingClasses} ${hoverClasses} rounded-xl ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";