import MainFramework from "@/components/main"
import Title from "@/components/title"
import { ReleaseInfoCard } from "../comp"
import { Artifact, getFirstAvaliableDownload } from "../model"
import { Card } from "@/components/card"
import { LinkButton } from "@/components/button"
import { notFound } from "next/navigation"

export const revalidate = 60 * 60 * 24 * 7 // 7 day

export default async function Page({
  params
}: {
  params: { version: string }
}) {
  const { version } = params
  console.log(version)
  const latest = await fetch(`https://g.mysit.life/artifact/${version}.json`)
  if (!latest.ok) return notFound()
  const info = await latest.json() as Artifact

  return <MainFramework>
    <Title
      title="历史下载"
      desc={`获取小应生活 v${info.version}`}
    />
    <ReleaseInfoCard
      version={`v${info.version}`}
      releaseTime={new Date(info.release_time).toLocaleString()}
      releaseNote={info.release_note}
    />
    <div className="text-center p-4 space-x-8">
      <GitHubCard link={getFirstAvaliableDownload(info.downloads.Android, ["github", "official"])} />
    </div>
  </MainFramework>
}

const GitHubCard = ({ link }: {
  link: string
}) => {
  return <Card header={
    <h2 id="android" className="text-xl">
      安卓
    </h2>
  }>
    <div>我们无法您确保该下载链接依然可用</div>
    <LinkButton target="_blank" href={link}>
      下载应用
    </LinkButton>
    <div>下载<a className="link" href="/download">最新版</a>？</div>
  </Card>
}