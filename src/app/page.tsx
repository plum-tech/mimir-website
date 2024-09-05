import MainFramework from "@/components/main"
import Title from "@/components/title";
import HomeButton from "@/components/home-button";
import previewGame from "./preview-game.png"
import previewTimetable from "./preview-timetable.png"
import previewI18n from "./preview-i18n.png"
import previewSecondClass from "./preview-second-class.png"
import previewLife from "./preview-life.png"
import previewP13n from "./preview-p13n.png"
import Image from "next/image";
import { ReactNode } from "react";
import { Card } from "@/components/card";

interface IHomeButton {
  title: string,
  desc: string,
  href: string,
}

export default function Home() {
  return (
    <MainFramework>
      <Title
        title="小应生活"
        desc={<>
          你的校园生活，从未如此简单。<br />
          上应人必备的App！
        </>}
      />

      <HomeButtonGroup actions={[{
        title: "应用下载",
        desc: "下载最新版小应生活App，适用于 iOS 和 Android",
        href: "/download",
      }, {
        title: "联系我们",
        desc: "通过以下方式与我们联系：电子邮箱、QQ群、微信公众号",
        href: "/contact",
      }]} />

      <div className="space-y-8 py-2">
        <Card>
          <ProductDescriptivePreview desc={
            <ProductDesc title={<>
              课程安排 都到这来
            </>}>
              无论本科生还是研究生，<br />你的课程, 小应统统帮你安排
            </ProductDesc>
          }
            image={<Image
              alt="课程表"
              src={previewTimetable}
              className="w-80"
            />}
          />
        </Card>
        <Card>
          <ProductDescriptivePreview desc={
            <ProductDesc title={<>
              消费电费 不忘缴费
            </>}>
              有了小应，你能实时关注余额动态，<br />
              不用担心等到断电、刷卡失败才发觉
            </ProductDesc>}
            image={<Image
              alt="消费记录和电费余额"
              src={previewLife}
              className="w-80"
            />}
          />
        </Card>
        <Card>
          <ProductDescriptivePreview desc={
            <ProductDesc title={<>
              第二课堂 最新活动
            </>}>
              随时随地，查看第二课堂最新动态。别错过你感兴趣的活动，小应助你一臂之力。
            </ProductDesc>}
            image={<Image
              alt="第二课堂分数"
              src={previewSecondClass}
              className="w-80"
            />}
          />
        </Card>
        <Card>
          <ProductDescriptivePreview desc={
            <ProductDesc title={<>
              休闲娱乐 欢度课余
            </>}>
              感觉无聊？打开小应，来玩点小游戏
            </ProductDesc>}
            image={<Image
              alt="扫雷"
              src={previewGame}
              className="w-80"
            />}
          />
        </Card>
        <Card>
          <ProductDescriptivePreview desc={
            <ProductDesc title={<>
              自定界面 时尚单品
            </>}>
              多种颜色随心配，定制你的专属小应
            </ProductDesc>}
            image={<Image
              alt="英文的设置界面"
              src={previewP13n}
              className="w-80"
            />}
          />
        </Card>
        <Card>
          <ProductDescriptivePreview desc={
            <ProductDesc title={<>
              多种语言 轻松切换
            </>}>
              小应内置简体中文，繁体中文和英文，你是留学生也能快速上手
            </ProductDesc>}
            image={<Image
              alt="英文的设置界面"
              src={previewI18n}
              className="w-80"
            />}
          />
        </Card>
      </div>
      <HomeButtonGroup actions={[{
        title: "意见反馈",
        desc: "欢迎您提出宝贵的建议，反馈遇到的问题，帮助我们改进小应生活",
        href: "/feedback",
      }, {
        title: "关于我们",
        desc: "深入了解小应生活及其背后的团队",
        href: "/about",
      }]} />
    </MainFramework>
  );
}

const HomeButtonGroup = ({
  actions
}: {
  actions: IHomeButton[]
}) => {
  return <div className="grid grid-cols-2 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left space-x-2 px-4">
    {
      actions.map((action, index) => (
        <HomeButton
          key={index}
          title={action.title}
          href={action.href}>
          {action.desc}
        </HomeButton>
      ))
    }
  </div>
}
const ProductDesc = ({
  title, children
}: {
  title: ReactNode
  children: ReactNode
}) => {
  return <>
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-gray-500">{children}</p>
  </>
}

const ProductDescriptivePreview = ({
  desc, image
}: {
  desc: ReactNode
  image: ReactNode
}) => {
  return <div className="flex flex-col  items-center justify-evenly">
    <div className="text-center max-w-full h-auto">
      {image}
    </div>
    <div className="text-center pt-4">
      {desc}
    </div>

  </div>
}

