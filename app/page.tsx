"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { useTheme } from "@/lib/theme-provider";

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [openProject, setOpenProject] = React.useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-bg-canvas">
      {/* Header */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onMobileMenuToggle={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-grow" id="main-content">
        <Hero onScrollToProjects={() => document.getElementById("projects")?.scrollIntoView()} />
        <CredibilityStrip />
        <About />
        <Experience />
        <Projects onOpenProject={setOpenProject} />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectModal projectId={openProject} onClose={() => setOpenProject(null)} />
    </div>
  );
}