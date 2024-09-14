import Title from "@/components/title"
import MainFramework from "@/components/main"
import { HomeButtonGroup } from "@/components/home-button"

export default function Page() {
  return (
    <MainFramework>
      <Title
        title="联系我们"
        desc="如需洽谈合作、咨询相关事宜，欢迎通过以下方式联系我们"
      />
      <HomeButtonGroup actions={[{
        title: "电子邮箱",
        desc: "请将您的邮件发送至 mimir@liplum.net，我们将于五个工作日内回复",
        href: "mailto:mimir@liplum.net",
      }, {
        title: "QQ群",
        desc: "欢迎加入小应生活QQ交流群（群号：917740212），与开发团队及其他用户实时互动",
        href: "https://qm.qq.com/q/ksVrG9TmSY",
      }, {
        title: "微信公众号",
        desc: '打开微信搜索"小应生活"，关注我们，掌握第一手资讯',
        href: "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0NDYyNjY0Nw==#wechat_redirect",
      }, 
      // {
      //   title: "留言反馈",
      //   desc: '在此网站上留下您的意见，我们会记录并提交给对应的团队',
      //   href: "/feedback",
      // }
      ]} />
    </MainFramework>)
}
