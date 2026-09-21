import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alex Rivera | Software & Systems Engineer",
  description: "Portfolio of Alex Rivera, Final-Year Computer Science Engineering student specializing in full-stack applications, scalable backend systems, and AI/ML integrations.",
  keywords: ["Software Engineer", "Full-Stack Developer", "Backend Engineer", "AI/ML", "TypeScript", "Python", "Go", "React", "Next.js", "Portfolio"],
  authors: [{ name: "Alex Rivera" }],
  creator: "Alex Rivera",
  publisher: "Alex Rivera",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexrivera.dev",
    title: "Alex Rivera | Software & Systems Engineer",
    description: "Portfolio of Alex Rivera, Final-Year Computer Science Engineering student specializing in full-stack applications, scalable backend systems, and AI/ML integrations.",
    siteName: "Alex Rivera Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rivera | Software & Systems Engineer",
    description: "Portfolio of Alex Rivera, Final-Year Computer Science Engineering student specializing in full-stack applications, scalable backend systems, and AI/ML integrations.",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0e12" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col bg-bg-canvas text-text-primary">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}