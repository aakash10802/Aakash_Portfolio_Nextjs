import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aakash | Portfolio",
  description:
    "Aakash, a passionate Full-Stack Developer specializing in MERN stack and proficient in Next.js, creating efficient, user-friendly web applications. Based in Trivandrum, Kerala, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/portfolio-edc61.appspot.com/o/favicon.ico?alt=media&token=f76a1fce-3e99-45c9-adfd-e2ea16fa5c81"
          sizes="any"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
