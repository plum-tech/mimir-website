import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "小应生活",
  description: "小应生活 - 校园生活就用小应生活，上应人必备App，上海应用技术大学小应生活团队开发",
  applicationName: "小应生活",
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "小应",
    "小应生活",
    "上海应用技术大学",
    "上应大",
    "应技大",
  ],
  openGraph: {
    type: "website",
    url: "https://www.xiaoying.life",
    title: "小应生活",
    description: "校园生活就用小应生活。",
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
        <meta itemProp="description" content="小应生活 - 校园生活就用小应生活。上应人必备App，上海应用技术大学小应生活团队开发" />
        <meta itemProp="image" content="https://www.xiaoying.life/icon-filled-256x.png" />
        <meta name="baidu-site-verification" content="codeva-btW1cVqDcz" />
      </head>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
