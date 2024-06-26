import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Rodape";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MKS sistemas",
  description: "DESAFIO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main className="bg-slate-100 h-screen p-16">{children}</main>
      </body>
      <Footer />
    </html>
  );
}
