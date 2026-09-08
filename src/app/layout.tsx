import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import "./globals.css";

const displayFont = Montserrat({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Montserrat({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

const monoFont = Montserrat({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "MIRA — управляющая компания и оператор сложной социальной инфраструктуры",
  description:
    "MIRA берёт на себя полное операционное управление сложным объектом и отвечает за его работу как единой системы — от подготовки к запуску до эксплуатации на протяжении жизненного цикла.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
