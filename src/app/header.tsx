import HeaderFramework, { HeaderTab, HeaderLeading } from "@/components/header"
import Image from "next/image";

const tabs: HeaderTab[] = [{
  label: "下载",
  popover: [{
    label: "Android",
    // href: "/download/android",
    href: "https://g.mysit.life/android/"
  }, {
    label: "iOS",
    // href: "/download/ios",
    href: "https://g.mysit.life/ios/",
  },]
}, {
  label: "小应社区",
  href: "https://forum.mysit.life",
  target: "_blank",
}, {
  label: "联系我们",
  href: "/contact",
}, {
  label: "关于",
  href: "/about",
},]
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
