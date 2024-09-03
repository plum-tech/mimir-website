import MainFramework from "@/components/main"
import Title from "@/components/title";
import HomeButton from "@/components/home-button";

const actions = [{
  title: "应用下载",
  desc: "下载最新版小应生活App，适用于 iOS 和 Android",
  href: "/download",
}, {
  title: "联系我们",
  desc: "通过以下方式与我们联系：电子邮箱、QQ群、微信公众号",
  href: "/contact",
}, {
  title: "意见反馈",
  desc: "欢迎您提出宝贵的建议，反馈遇到的问题，帮助我们改进小应生活",
  href: "/feedback",
}, {
  title: "关于我们",
  desc: "深入了解小应生活及其背后的团队",
  href: "/about",
},]

export default function Home() {
  return (
    <MainFramework>
      <Title
        title="小应生活"
        desc="你的校园生活，从未如此简单"
      />

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {
          actions.map(action => (
            <HomeButton
              key={action.title}
              title={action.title}
              href={action.href}
            >{action.desc}</HomeButton>
          ))
        }
      </div>
    </MainFramework>
  );
}

