import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/providers/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Labelshot — Turn Your Label Into a Product Image",
  description:
    "Upload your supplement label and instantly generate photorealistic product images. No photographers. No Photoshop. No distorted ingredients.",
  keywords: [
    "supplement product images",
    "AI product rendering",
    "3D label rendering",
    "Shopify product photography",
    "supplement mockups",
    "product image generator",
  ],
  openGraph: {
    title: "Labelshot — Your Label. Perfectly Rendered.",
    description:
      "Generate studio-quality supplement product images from your flat label design in seconds.",
    url: "https://labelshot.io",
    siteName: "Labelshot",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Labelshot — Turn Your Label Into a Product Image",
    description:
      "Photorealistic supplement product images in seconds. Built for Shopify brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
