import FooterFramework, { FooterSection, QuickContact } from "@/components/footer";
import { SiGithub } from '@icons-pack/react-simple-icons';
const sections: FooterSection[] = [{
  label: "发布",
  items: [{
    label: "应用下载",
    href: "/download",
  }, {
    label: "开源仓库",
    href: "https://github.com/plum-tech/mimir",
  },]
}, {
  label: "帮助",
  items: [{
    label: "联系我们",
    href: "/contact",
  }, {
    label: "关于我们",
    href: "/about",
  }, {
    label: "意见反馈",
    href: "/feedback",
  },]
}, {
  label: "协议",
  items: [{
    label: "隐私政策",
    href: "/privacy-policy",
  }, {
    label: "服务协议",
    href: "/tos",
  }],
}, {
  label: "更多",
  items: [{
    label: "小应社区",
    href: "https://forum.mysit.life",
    target: "_blank",
  }, {
    label: "SIT-Minecraft",
    href: "https://www.sitmc.club/",
    target: "_blank",
  }],
}]
const quickContacts: QuickContact[] = [{
  desc: "GitHub",
  href: "https://github.com/plum-tech/mimir-website",
  target: "_blank",
  icon: <SiGithub />,
}]

export default function Footer() {
  return <div className="md:px-8 lg:px-16">
    <FooterFramework
      sections={sections}
      quickContacts={quickContacts}
    >
      <>Copyright © 2024 <a href="https://liplum.net"
        className="underline"
      >Plum Technology Ltd.</a>. All Rights Reserved. </>
      <br />
      <a rel="nofollow" href="https://beian.miit.gov.cn"
        className="underline"
      >沪ICP备2024077945号-2</a>
    </FooterFramework>
  </div>
}
