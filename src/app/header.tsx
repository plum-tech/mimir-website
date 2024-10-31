import HeaderFramework, { HeaderTab, HeaderLeading } from "@/components/header"
import Image from "next/image"
import icon from "./icon.png"

const tabs: HeaderTab[] = [{
  label: "应用下载",
  href: "/download",
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
    trailing={{
      href: "https://auth.xiaoying.life",
      label: <label>
        登录
      </label>
    }}
    tabs={tabs}
  />
}
