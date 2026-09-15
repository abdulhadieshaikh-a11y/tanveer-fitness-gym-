import type { Metadata } from "next";
import { Big_Shoulders_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tanveer Fitness | Strength Gym in Gulgasht, Multan",
  description:
    "Tanveer Fitness is a strength and conditioning gym on Gulgasht Ave, near Chungi #6, Colony Block C, Multan. Free weights, functional training, and coaching built for real results.",
  keywords: [
    "gym in Multan",
    "Gulgasht gym",
    "Tanveer Fitness",
    "strength training Multan",
    "fitness club Multan",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
