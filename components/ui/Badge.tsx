"use client";

import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success" | "warning" | "error" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", size = "md", dot = false, children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center font-mono font-medium rounded-full";
    
    const variantClasses = {
      default: "bg-bg-muted text-text-muted",
      primary: "bg-accent/10 text-accent border border-accent/20",
      success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      warning: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
      error: "bg-red-500/10 text-red-400 border border-red-500/20",
      outline: "bg-transparent text-text-primary border border-border",
    }[variant];

    const sizeClasses = {
      sm: "px-2 py-0.5 text-[10px]",
      md: "px-2.5 py-1 text-xs",
    }[size];

    return (
      <span
        ref={ref}
        className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className || ""}`}
        {...props}
      >
        {dot && <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${dot === true ? "bg-current" : ""}`} />}
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";