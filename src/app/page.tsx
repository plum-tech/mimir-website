import MainFramework from "@/components/main"
import Title from "@/components/title";
import { HomeButtonGroup } from "@/components/home-button";
import previewGame from "./preview-game.png"
import previewTimetable from "./preview-timetable.png"
import previewI18n from "./preview-i18n.png"
import previewSecondClass from "./preview-second-class.png"
import previewLife from "./preview-life.png"
import previewP13n from "./preview-p13n.png"
import Image from "next/image";
import { ReactNode } from "react";
import { Card } from "@/components/card";

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

      <div className="py-2 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <ProductDescriptiveCard
          title={<>
            课程安排 都到这来
          </>}
          desc={<>
            无论本科生还是研究生，<br />
            你的课程 小应统统帮你安排
          </>}
          image={previewTimetable}
          imageAlt="课程表"
        />
        <ProductDescriptiveCard
          title={<>
            消费电费 不忘缴费
          </>}
          desc={<>
            实时关注余额动态<br />
            即刻制定消费计划
          </>}
          image={previewLife}
          imageAlt="消费记录和电费余额"
        />
        <ProductDescriptiveCard
          title={<>
            第二课堂 一键展示
          </>}
          desc={<>
            随时随地关注最新动态<br />
            你感兴趣的活动都在这里
          </>}
          image={previewSecondClass}
          imageAlt="第二课堂分数"
        />
        <ProductDescriptiveCard
          title={<>
            休闲娱乐 欢度课余
          </>}
          desc={<>
            闲暇之余没事干？<br />
            上小应，多款小游戏任你畅玩
          </>}
          image={previewGame}
          imageAlt="扫雷"
        />
        <ProductDescriptiveCard
          title={<>
            自定界面 时尚单品
          </>}
          desc={<>
            色彩斑斓任你挑 多种颜色随心配<br />
            打造你的专属小应
          </>}
          image={previewP13n}
          imageAlt="课表配色方案和单元格格式"
        />
        <ProductDescriptiveCard
          title={<>
            多种语言 轻松切换
          </>}
          desc={<>
            支持简体/繁体中文和英文<br />
            留学生也能快速上手
          </>}
          image={previewI18n}
          imageAlt="英文的设置界面"
        />
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


const ProductDesc = ({
  title, children
}: {
  title: ReactNode
  children: ReactNode
}) => {
  return <>
    <h2 className="text-3xl font-bold py-1">{title}</h2>
    <p className="text-gray-500 py-2">{children}</p>
  </>
}

const ProductDescriptiveCard = ({
  title, desc, image, imageAlt
}: {
  title: ReactNode
  desc?: ReactNode
  imageAlt?: string
  image: typeof previewI18n
}) => {
  return <Card>
    <ProductDescriptivePreview desc={
      <ProductDesc title={title}>
        {desc}
      </ProductDesc>}
      image={<Image
        alt={imageAlt ?? ""}
        src={image}
        className="w-80"
      />}
    />
  </Card>
}


const ProductDescriptivePreview = ({
  desc, image
}: {
  desc: ReactNode
  image: ReactNode
}) => {
  return <div className="flex flex-col items-center justify-evenly">
    <div className="text-center max-w-full h-auto">
      {image}
    </div>
    <div className="text-center pt-4">
      {desc}
    </div>

  </div>
}

