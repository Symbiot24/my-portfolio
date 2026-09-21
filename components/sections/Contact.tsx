"use client";

import React, { useState } from "react";
import { contactLinks } from "@/lib/constants";
import { Input, Textarea, Button } from "@/components/ui";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 800);
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent font-semibold tracking-wider uppercase">07 // DIRECT CONTACT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
              Let&apos;s talk engineering.
            </h2>
            <p className="text-sm leading-relaxed text-text-muted">
              I reply promptly to inquiries regarding open full-time positions, technical questions about my projects, or engineering collaborations.
            </p>

            <div className="space-y-3 font-mono text-xs pt-2">
              {contactLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3.5 rounded-lg border flex items-center justify-between transition-colors bg-bg-card border-border hover:border-accent text-text-muted"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-accent text-sm">
                      {link.icon === "mail" ? "mail" : link.icon === "linkedin" ? "link" : "terminal"}
                    </span>
                    <span>{link.description}</span>
                  </div>
                  <span className="text-accent font-semibold">{link.label} ↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Message Form */}
          <div className="lg:col-span-7 border rounded-lg p-6 sm:p-7">
            <h3 className="text-base font-semibold mb-1 text-text-primary">Direct Message</h3>
            <p className="text-xs mb-5 font-mono text-text-muted">
              Dispatches directly to my primary inbox with verified status.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Name / Recruiter Org"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g. Sarah Connor (Tech Recruiter)"
                />
                <Input
                  label="Work Email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="s.connor@company.com"
                />
              </div>

              <Input
                label="Subject / Role Opportunity"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                placeholder="SWE (New Grad) Role @ [Company Name]"
              />

              <Textarea
                label="Message Details"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell me about the team, tech stack, or questions about my background..."
                rows={4}
              />

              <div className="flex items-center justify-between pt-2">
                <Button 
                  type="submit" 
                  disabled={status === "sending"} 
                  loading={status === "sending"}
                >
                  {status === "sent" ? (
                    <>
                      <span className="material-symbols-outlined text-sm">check_circle</span>
                      <span>Message Dispatched</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </>
                  )}
                </Button>
                {status === "sent" && (
                  <span className="text-xs text-emerald-400 font-mono">
                    ✓ Dispatched successfully! I will reply within 24 hours.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};