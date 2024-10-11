import { Card } from "@/components/card"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ReactNode } from "react"
import { ReleaseNote } from "./model"

export const ReleaseInfoCard = ({
  version, releaseTime, releaseNote
}: {
  version: ReactNode
  releaseTime: ReactNode
  releaseNote: ReleaseNote
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
      <MDXRemote source={releaseNote["zh-Hans"]} />
    </article>
  </Card >
}
