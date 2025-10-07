import type { Metadata } from "next";
import { Roboto_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/providers";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const roboto = Roboto_Mono({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT. Mitra Abadi Mahakam",
  description:
    "Mitra Tepat untuk Solusi Pertambangan Anda. Kami menyediakan layanan penambangan komprehensif dengan tim berpengalaman dan peralatan modern.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${dmSans.variable} ${roboto.variable} antialiased font-sans`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
