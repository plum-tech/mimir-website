import Title from "@/components/title"
import MainFramework from "@/components/main"
import HomeButton from "@/components/home-button"

export default function Page() {
  return (
    <MainFramework>
      <Title
        title="联系我们"
        desc="如需洽谈合作、咨询相关事宜，欢迎通过以下方式联系我们"
      />

      <div className="mb-32 grid gap-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <HomeButton
          title="电子邮箱"
          href="mailto:mimir@liplum.net">
          <span className="text-gray-200">
            请将您的邮件发送至 mimir@liplum.net，我们将于五个工作日内回复
          </span>
        </HomeButton>
        <HomeButton
          title="QQ交流群"
          href="https://qm.qq.com/q/ksVrG9TmSY">
          <span className="text-gray-200">
            欢迎加入小应生活QQ交流群（群号：917740212），与开发团队及其他用户实时互动
          </span>
        </HomeButton>
        <HomeButton
          href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0NDYyNjY0Nw==#wechat_redirect"
          title="微信公众号">
          <span className="text-gray-200">
            {'打开微信搜索"小应生活"，关注我们'}
          </span>
          {/* <span className="text-gray-200">
            请打开微信扫描下方二维码，关注我们的微信公众号
          </span>
          <Image
            className="m-4 mx-auto"
            src="/wechat-oa-qrcode.png"
            alt="小应生活微信公众号二维码"
            width={180} height={180}
          /> */}
        </HomeButton>
      </div>
    </MainFramework>)
}
