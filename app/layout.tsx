import type { Metadata } from "next";
import {Poppins} from "next/font/google"
import "./globals.css";
import Header from "@/components/Home/Header";
import { Analytics } from '@vercel/analytics/next';

const poppins = Poppins({
  subsets:["latin"],
  weight:["300","400","500","600","700","800","900"]
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Deepak's Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased lg:ps-28 lg:pe-28 ps-8 pe-8 p-3`}
      >
         <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
