import GoToTopButton from "@/components/go-top";
import Footer from "./footer";
import Header from "./header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>
    <Header />
    {children}
    <Footer />
    <GoToTopButton />
  </>
}
