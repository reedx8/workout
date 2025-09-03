import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Lato } from "next/font/google";
import "./globals.css";

// Lato = regula text
// Anton = Headlines <h1>, etc

const defaultFont = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

// const headFont = Anton({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Workout Website",
  description: "Workout Website Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${defaultFont.className} antialiased`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
