import { Card } from "@/components/card";
import MainFramework from "@/components/main";
import Title from "@/components/title";
import { MDXRemote } from 'next-mdx-remote/rsc'

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
  const releaseTime = new Date(info.release_time)
  return <MainFramework>
    <Title
      title="应用下载"
      desc="下载小应生活的最新版本"
    />
    <Card
      header={
        <div className="text-xl text-center">
          v{info.version}
        </div>
      }
      footer={
        <div className="text-end">
          {releaseTime.toLocaleString()}
        </div>
      }
    >
      <article>
        <MDXRemote source={info.release_note} />
      </article>
    </Card >
    {/* {JSON.stringify(json, null, 2)} */}
  </MainFramework>
}

