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
  const json = await latest.json() as Artifact

  return <MainFramework>
    <Title
      title="应用下载"
      desc=""
    />
    <ReleaseNote note={json.release_note} />
    {/* {JSON.stringify(json, null, 2)} */}
  </MainFramework>
}

const ReleaseNote = ({ note }: { note: string }) => {
  return (
    <Card>
      <article>
        <MDXRemote source={note} />
      </article>
    </Card >
  )
}
