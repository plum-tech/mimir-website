import HeaderFramework, { HeaderTab, HeaderLeading } from "@/components/header"
import Image from "next/image";

const tabs: HeaderTab[] = [{
  label: "下载",
  popover: [{
    label: "Android",
    href: "/download/Android",
  }, {
    label: "iOS",
    href: "/download/iOS",
  },]
}, {
  label: "联系我们",
  href: "/contact",
}, {
  label: "关于",
  href: "/about",
}]
const leading: HeaderLeading = {
  icon: <Image
    className="h-8 w-auto"
    src="/icon-512x.png"
    alt="小应生活 Logo"
    width={256}
    height={256}
  />,
  href: "/",
}
export default function Header() {
  return <HeaderFramework
    leading={leading}
    tabs={tabs}
  />
}
