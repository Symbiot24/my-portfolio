"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-xs font-mono text-text-muted mb-1.5">
            {label}
            {props.required && <span className="text-accent ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={`${error ? errorId : ""} ${hint ? hintId : ""}`.trim() || undefined}
          className={`
            w-full bg-bg-canvas border rounded-lg px-3.5 py-2.5 text-sm font-mono
            text-text-primary placeholder-text-subtle
            border-border focus:border-accent focus:ring-1 focus:ring-accent
            disabled:bg-bg-muted disabled:cursor-not-allowed disabled:opacity-50
            transition-colors duration-150
            ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
            ${className || ""}
          `}
          {...props}
        />
        {error && (
          <p id={errorId} className="mt-1.5 text-xs text-red-400" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={hintId} className="mt-1.5 text-xs text-text-subtle">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";