import HeaderFramework, { HeaderTab, HeaderLeading } from "@/components/header"
import Image from "next/image"
import icon from "./icon.png"

const tabs: HeaderTab[] = [{
  label: "下载",
  popover: [{
    label: "Android",
    href: "/download#android",
  }, {
    label: "iOS",
    href: "/download#ios",
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
export default function Header() {
  return <HeaderFramework
    leading={{
      icon: <Image
        className="h-8 w-auto"
        src={icon}
        alt="小应生活 Logo"
      />,
      href: "/",
    }}
    tabs={tabs}
  />
}
