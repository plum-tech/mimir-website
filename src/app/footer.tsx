import FooterFramework, { FooterSection, QuickContact } from "@/components/footer";
import { SiGithub } from '@icons-pack/react-simple-icons';
const sections: FooterSection[] = [{
  label: "应用下载",
  items: [{
    label: "Android",
    // href: "/download/android",
    href: "https://g.mysit.life/android/"
  }, {
    label: "iOS",
    // href: "/download/ios",
    href: "https://g.mysit.life/ios/",
  },]
}, {
  label: "帮助",
  items: [{
    label: "联系我们",
    href: "/contact",
  }, {
    label: "关于我们",
    href: "/about",
  },]
}, {
  label: "反馈",
  items: [{
    label: "意见反馈",
    href: "/feedback",
  },],
}, {
  label: "更多",
  items: [{
    label: "小应社区",
    href: "https://forum.mysit.life",
    target:"_blank",
  },],
}]
const quickContacts: QuickContact[] = [{
  desc: "GitHub",
  href: "https://github.com/liplum-dev/mimir-website",
  target:"_blank",
  icon: <SiGithub />,
}]

export default function Footer() {
  return <div className="px-16">
    <FooterFramework
      sections={sections}
      quickContacts={quickContacts}
    >
      <>Copyright © 2024 <a href="https://liplum.net"
        className="underline"
      >Plum Technology Ltd.</a>. All Rights Reserved. </>
      <br />
      <a href="https://beian.miit.gov.cn"
        className="underline"
      >沪ICP备2024077945号-2</a>
    </FooterFramework>
  </div>
}
