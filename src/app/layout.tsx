import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'; // 你的全局 CSS 文件路径
import { NextUIProvider } from '@nextui-org/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Break the information cocoon",
  description: "Break the information cocoon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
