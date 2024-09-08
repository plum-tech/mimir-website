import MainFramework from "@/components/main"
import Title from "@/components/title"
import dynamic from 'next/dynamic'
import { notFound, redirect } from "next/navigation"

const versions = [
  "20240915"
]

export default async function Page({
  params
}: {
  params: { version: string }
}) {
  const { version } = params
  if (!versions.includes(version)) {
    return redirect("/tos/20240915")
  }
  const DynamicToS = dynamic(() => import(`../${version}.md`))

  return <MainFramework>
    <Title
      title="服务条款"
      desc=""
    />
    <div className="px-4 md:px-8 lg:px-16">
      <DynamicToS />
    </div>
  </MainFramework>
}
