import { Card } from "@/components/card";
import MainFramework from "@/components/main";
import Title from "@/components/title";
import { LinkButton } from "@/components/button"
import Image from "next/image";
import downloadOnAppStoreBadge from "./download-on-the-app-store-badge.svg"
import { Artifact, getFirstAvailableDownload } from "./model";
import { ReleaseInfoCard } from "./comp";

export const revalidate = 60 * 60 // 60 minutes

export default async function Page() {
  const latest = await fetch("https://g.mysit.life/artifact/latest.json")
  const info = await latest.json() as Artifact

  return <MainFramework>
    <Title
      title="应用下载"
      desc="获取最新版本的小应生活"
    />
    <ReleaseInfoCard
      version={`v${info.version}`}
      releaseTime={new Date(info.release_time).toLocaleString()}
      releaseNote={info.release_note}
    />
    <div className="grid text-center grid-cols-2 p-4 gap-8">
      <AndroidCard link={getFirstAvailableDownload(info.downloads.Android)} />
      <IosCard />
    </div>
    <DownloadSourceAds />
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
      <LinkButton target="_blank" href={link}>
        下载应用
      </LinkButton>
      <a target="_blank" href="market://details?id=life.mysit.sit_life" className="link block">
        从应用商店获取
      </a>
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
      <a target="_blank" href="https://apps.apple.com/cn/app/id6468989112">
        <Image
          alt="从 App Store 获取小应生活"
          src={downloadOnAppStoreBadge}
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
    💰安卓下载由 <a className="link" href="https://www.sitmc.club/">上海应用技术大学Minecraft六角恐龙社群</a> 提供赞助
  </Card>
}