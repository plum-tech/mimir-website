import HeaderFramework, { HeaderTab, HeaderLeading } from "@/components/header"
import Image from "next/image"
import icon from "./header-icon.png"
import { cookies } from 'next/headers'
import { verifyMimirToken } from "@/utils/auth"

const tabs: HeaderTab[] = [{
  label: "应用下载",
  href: "/download",
}, {
  label: "小应社区",
  href: "https://sit.xiaoying.life",
  target: "_blank",
}, {
  label: "联系我们",
  href: "/contact",
}, {
  label: "关于",
  href: "/about",
},]

export default async function Header() {
  const nextCookies = cookies()
  const token = nextCookies.get("MIMIR_TOKEN")
  const payload = token ? await verifyMimirToken(token.value) : undefined
  return <HeaderFramework
    leading={{
      icon: <Image
        className="h-8 w-auto"
        src={icon}
        alt="小应生活 Logo"
      />,
      href: "/",
    }}
    trailing={payload ? {
      href: "https://auth.xiaoying.life",
      label: "您的账号",
      target: "_self",
    } : {
      href: "https://auth.xiaoying.life/sign-in",
      label: "登录",
      target: "_self",
    }}
    tabs={tabs}
  />
}
