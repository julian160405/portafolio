import "./globals.css";
import type {Metadata} from "next";
import Navbar from "@/Components/navbar";
import Header from "@/Components/header";

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const metadata: Metadata = {
  title: "Portafolio - Julián Ortiz",
  description: "Portafolio de Julián Ortiz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased font-urbanist">
        <Navbar/>
        <Header/>
        {children}
      </body>
    </html>
  );
}

