import { Montserrat, DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import Google Fonts directly
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Gym App",
  description: "Gym App developed by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
