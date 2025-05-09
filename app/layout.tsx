import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://meikopoulos.com"),
  // alternates: {
  //   canonical: "https://meikopoulos.com",
  // },
  title: "Mehdi Rezaii - Front End Developer",
  description:
    "Mehdi Rezaii - Front End Developer",
  keywords:
    "Mehdi Rezaii, Front End Developer, ReactJs, NextJs, Seo, PWA",
  openGraph: {
    locale: "en_US",
    siteName: "Mehdi Rezaii",
    type: "website",
    title: "Mehdi Rezai",
    description:
      "Mehdi Rezaii - Front End Developer",
    // url: "https://meikopoulos.com",
    // images: [
    //   {
    //     url: "./og-large-meik-2.jpg",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehdi Rezaii",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
