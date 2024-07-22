import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 -小应生活",
  description: "小应生活",
};

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children
}
