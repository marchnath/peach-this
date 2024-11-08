import { Inter } from "next/font/google";
import "./globals.css";
// import Nav from "./nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peach Beauty Salon",
  description: "Peach Beauty Salon - это салон красоты в Москве.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
