import Title from "@/components/title"
import { ReactNode } from "react"
import Image from "next/image"
import MainFramework from "@/components/main"

export default function Page() {
  return (
    <MainFramework>
      <Title
        title="联系我们"
        desc="如需洽谈合作、咨询相关事宜，欢迎通过以下方式联系我们"
      />

      <div className="mb-32 grid gap-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <ContactBox
          title="电子邮箱"
          href="mailto:mimir@liplum.net">
          <span className="text-gray-200">
            请将您的邮件发送至 mimir@liplum.net，我们将于五个工作日内回复
          </span>
        </ContactBox>
        <ContactBox
          title="QQ交流群"
          href="https://qm.qq.com/q/ksVrG9TmSY">
          <span className="text-gray-200">
            欢迎加入小应生活QQ交流群（群号：917740212），与开发团队及其他用户实时互动
          </span>
        </ContactBox>
        <ContactBox
          title="微信公众号">
          <span className="text-gray-200">
            请打开微信扫描下方二维码，关注我们的微信公众号
          </span>
          <Image
            className="m-4 mx-auto"
            src="/wechat-oa-qrcode.jpg"
            alt="小应生活微信公众号二维码"
            width={180} height={180}
          />
        </ContactBox>
      </div>
    </MainFramework>)
}

const ContactBox = ({
  title, href, children
}: {
  title: ReactNode
  children: ReactNode
  href?: string
}) => {
  return <a
    href={href}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 border-neutral-500 bg-neutral-800/30"
    target="_blank"
  >
    <h2 className="mb-3 text-2xl font-semibold">
      {`${title} `}
      {href && <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>}
    </h2>
    <p className="m-0 max-w-[30ch] text-sm">
      {children}
    </p>
  </a>
}
