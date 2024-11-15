import { Card } from "@/components/card";
import MainFramework from "@/components/main";
import Title from "@/components/title";
import { LinkButton } from "@/components/button"
import Image from "next/image";
import downloadOnAppStoreBadge from "./download-on-the-app-store-badge.svg"
import { VersionInfo } from "./model";
import { ReleaseInfoCard } from "./comp";
import { WechatOpenInBrowserOverlay } from "@/components/wechat";
import { ToLocaleString } from "@/components/date"

export const revalidate = 60 * 60 // 60 minutes

export default async function Page() {
  const latest = await fetch("https://version.xiaoying.life/v1/release/latest")
  const info = await latest.json() as VersionInfo

  return <MainFramework>
    <Title
      title="应用下载"
      desc="获取最新版本的小应生活"
    />
    <ReleaseInfoCard
      version={`v${info.version}`}
      releaseTime={<ToLocaleString date={new Date(info.time)} />}
      releaseNote={info.releaseNote}
    />
    <div className="grid text-center grid-cols-2 p-4 gap-8">
      <AndroidCard link={info.assets.Android.defaultSrc} />
      <IosCard />
    </div>
    <DownloadSourceAds />
    <WechatOpenInBrowserOverlay />
  </MainFramework>
}

const AndroidCard = ({ link }: {
  link: string
}) => {
  return <Card header={
    <h2 id="android" className="text-xl">
      安卓
    </h2>
  }>
    <div className="space-y-2">
      <LinkButton target="_blank" href="market://details?id=life.mysit.sit_life">
        应用商店
      </LinkButton>
      {
        link &&
        <a target="_blank" href={link} className="link block">
          下载APK文件
        </a>
      }
    </div>
  </Card>
}

const IosCard = () => {
  return <Card header={
    <h2 id="ios" className="text-xl">
      iOS
    </h2>
  }>
    <div className="space-y-2">
      <a target="_blank" href="https://apps.apple.com/cn/app/id6468989112" className="flex justify-center">
        <Image
          alt="从 App Store 获取小应生活"
          src={downloadOnAppStoreBadge}
          className=""
        />
      </a>
      <a target="_blank" href="https://testflight.apple.com/join/hPeQ13fe" className="link block">
        加入 Test Flight
      </a>
    </div>
  </Card>
}

const DownloadSourceAds = () => {
  return <Card>
    💰安卓APK下载由 <a className="link" href="https://www.sitmc.club/">上海应用技术大学Minecraft六角恐龙社群</a> 提供赞助
  </Card>
}