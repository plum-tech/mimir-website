import { Card } from "@/components/card";
import MainFramework from "@/components/main";
import Title from "@/components/title";
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ReactNode } from "react";

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
    {/* {JSON.stringify(json, null, 2)} */}
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

