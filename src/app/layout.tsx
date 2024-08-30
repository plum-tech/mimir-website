import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import Header from "./header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "小应生活",
  description: "小应生活 - 你的校园生活，从未如此简单。上应人必备App，上海应用技术大学小应生活团队开发",
  applicationName: "小应生活",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "小应生活",
    "上海应用技术大学",
    "上应大",
    "应技大",
    Buffer.from("5LiK5bqU5bCP6aOO562d", "base64").toString("utf8"),
  ],
  openGraph: {
    type: "website",
    url: "https://www.mysit.life",
    title: "小应生活",
    description: "你的校园生活，从未如此简单。",
    siteName: "小应生活",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta itemProp="name" content="小应生活" />
        <meta itemProp="description" content="小应生活 - 你的校园生活，从未如此简单。上应人必备App，上海应用技术大学小应生活团队开发" />
        <meta itemProp="image" content="https://www.mysit.life/icon-512x.png" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
