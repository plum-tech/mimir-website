import TabHeader from "@/components/header"

const tabs = [{
  name: "下载",
  href: "/download",
}, {
  name: "联系我们",
  href: "/contact",
}, {
  name: "关于",
  href: "/about",
}]

export default function Header() {
  return <TabHeader tabs={tabs} />
}
