import MainFramework from "@/components/main"
import Title from "@/components/title"
import dynamic from 'next/dynamic'
import { redirect } from "next/navigation"
import { tosVersions } from "../version"

export default async function Page({
  params
}: {
  params: { version: string }
}) {
  const { version } = params
  if (!tosVersions.includes(version)) {
    return redirect(`/tos/${tosVersions[0]}`)
  }
  const DynamicToS = dynamic(() => import(`../list/${version}.md`))

  return <MainFramework>
    <Title
      title="服务协议"
      desc={`${version}版`}
    />
    <div className="px-4 md:px-8 lg:px-16">
      <DynamicToS />
    </div>
  </MainFramework>
}
