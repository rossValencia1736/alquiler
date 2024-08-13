import { Urbanist } from "next/font/google";
import "./globals.css";
import Menu from "@/components/generales/Menu";
import Pie from "@/components/generales/Pie";

export const runtime = "edge";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--fuente-texto",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Alquiler",
  description: "Alquiler de bienes raíces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={urbanist.className}>
        <Menu />
        {children}
        <Pie />
      </body>
    </html>
  );
}
