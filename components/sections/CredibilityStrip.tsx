"use client";

import React from "react";
import { credibilityStats } from "@/lib/constants";

export const CredibilityStrip: React.FC = () => {
  return (
    <section className="border-b border-border bg-bg-card/60 py-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
          {credibilityStats.map((stat, index) => (
            <div key={index} className={`px-2 ${index < 3 ? "border-r border-border last:border-none" : "col-span-2 sm:col-span-1"}`}>
              {index < 3 ? (
                <>
                  <span className="block text-xs font-mono text-text-muted">{stat.label}</span>
                  <span className="text-sm font-semibold text-text-primary">{stat.value}</span>
                </>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Interview Ready
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};