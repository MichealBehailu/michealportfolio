import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Micheal Behailu | Software Engineer",
  description: "Micheal Behailu is a senior software engineer student who builds responsive and user-friendly websites and desktop applications using modern tools and technologies.",
  keywords: ["software engineer", "web developer", "full stack developer", "React", "Next.js", "portfolio"],
  authors: [{ name: "Micheal Behailu" }],
  openGraph: {
    title: "Micheal Behailu | Software Engineer",
    description: "Building responsive and user-friendly websites with modern technologies",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
