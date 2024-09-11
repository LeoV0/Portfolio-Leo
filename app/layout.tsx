import type { Metadata } from "next";
import { cn } from "@/lib/utils";
// import localFont from "next/font/local";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Anek_Telugu } from "next/font/google";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const AnkedTelugu = Anek_Telugu({ subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Leo - Developper Front-End",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable,GeistMono.variable, AnkedTelugu.variable, "font-sans h-full bg-background text-foreground")}>
        {children}
      </body>
    </html>
  );
}
