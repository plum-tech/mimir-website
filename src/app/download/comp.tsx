import { LinkButton } from "@/components/button"
import { Card } from "@/components/card"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ReactNode } from "react"
import { MoreDownloads } from "./client-comp"

export const ReleaseInfoCard = ({
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

export const AllVersionDownloads = () => {
  return <MoreDownloads versions={[
    "2.1.1+16",
    "2.1.2+18",
    "2.1.3+19",
    "2.3.0+25",
    "2.3.1+26",
    "2.3.2+27",
    "2.4.0+40",
    "2.4.1+44",
    "2.4.2+453",
    "2.4.3+456",
    "2.5.2+471",
  ]} />
}
