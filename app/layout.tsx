import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import { ModalProvider } from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import NextTopLoader from "nextjs-toploader";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "store",
  description: "store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextTopLoader />
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
