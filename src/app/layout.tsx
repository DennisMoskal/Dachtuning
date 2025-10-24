import type { Metadata } from "next";
import { Inter, UnifrakturCook } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const unifraktur = UnifrakturCook({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-unifraktur"
});

export const metadata: Metadata = {
  title: "Dachtuning.de - Ihr Dachunternehmen",
  description: "Dachsanierung, Nanotech-Beschichtung & Fassadenarbeiten - Hart. Professionell. Zuverlässig.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <ClientBody className={`${inter.variable} ${unifraktur.variable}`}>
        {children}
      </ClientBody>
    </html>
  );
}
