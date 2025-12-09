import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Link from "next/link";
import { ThemeProvider } from "next-themes";
import ThemeSelector from "@/components/ThemeSelector";
import FooterPage from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PROJECT",
  description: "SCHOOL PROJECT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <div className="theme-select absolute">
            <ThemeSelector />
          </div>
        </ThemeProvider>
        <FooterPage />
      </body>
    </html>
  );
}
