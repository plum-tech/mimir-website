import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "使用协议 - 小应生活",
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
