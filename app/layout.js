import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Add this line
});

const trajan = localFont({
  src: "../public/ofont.ru_Trajan.ttf", // Adjust path based on your file name
  variable: "--font-trajan",
});

const nexaLight = localFont({
  src: "../public/Nexa_Light.otf", // Adjust path based on your file name
  variable: "--font-nexa-light",
});

export const metadata = {
  title: "Peach Beauty Salon",
  description: "Peach Beauty Salon - это салон красоты в Москве.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${trajan.variable} ${nexaLight.variable} ${inter}`}>
        {children}
      </body>
    </html>
  );
}
