import { Card } from "@/components/card";
import MainFramework from "@/components/main";
import Title from "@/components/title";
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ReactNode } from "react";
import { LinkButton } from "@/components/button"

interface Artifact {
  version: string
  release_time: string
  release_note: string
  downloads: Record<string, ArtifactDownload>
}

interface ArtifactDownload {
  name: string
  default: string
  sha256: string
  url: Record<string, string>
}

const getDefaultDownload = (downloads: ArtifactDownload) => {
  return downloads.url[downloads.default]
}

export default async function Page() {
  const latest = await fetch("https://g.mysit.life/artifact/latest.json")
  const info = await latest.json() as Artifact

  return <MainFramework>
    <Title
      title="应用下载"
      desc="下载小应生活的最新版本"
    />
    <ReleaseInfoCard
      version={`v${info.version}`}
      releaseTime={new Date(info.release_time).toLocaleString()}
      releaseNote={info.release_note}
    />
    <div className="grid text-center grid-cols-2 p-8 space-x-4">
      <AndroidCard link="getDefaultDownload(info.downloads.Android)" />
      <IosCard />
    </div>
    <DownloadSourceAds />
  </MainFramework>
}

const ReleaseInfoCard = ({
  version, releaseTime, releaseNote
}: {
  version: ReactNode
  releaseTime: ReactNode
  releaseNote: string
}) => {
  return <Card
    header={
      <div className="text-xl text-center">
        {version}
      </div>
    }
    footer={
      <div className="text-end">
        {releaseTime}
      </div>
    }
  >
    <article>
      <MDXRemote source={releaseNote} />
    </article>
  </Card >
}

const AndroidCard = ({ link }: {
  link: string
}) => {
  return <Card header={
    <h2 id="android" className="text-xl">
      安卓
    </h2>
  }>
    <LinkButton target="_blank" href={link}>
      下载应用
    </LinkButton>
  </Card>
}

const IosCard = () => {
  return <Card header={
    <h2 id="ios" className="text-xl">
      iOS
    </h2>
  }>
    <a target="_blank" href="https://apps.apple.com/cn/app/id6468989112">
      <img src="/download-on-the-app-store-badge.svg" />
    </a>
    加入<a target="_blank" href="https://testflight.apple.com/join/2n5I09Zv" className="link">Test Flight</a>
  </Card>
}

const DownloadSourceAds = () => {
  return <Card>
    💰安卓下载由 <a className="link" href="https://www.sitmc.club/">上海应用技术大学Minecraft六角恐龙社群</a> 提供赞助
  </Card>
}