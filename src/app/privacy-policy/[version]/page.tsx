import MainFramework from "@/components/main"
import Title from "@/components/title"
import dynamic from 'next/dynamic'
import { redirect } from "next/navigation"

const versions = [
  "20240912"
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
  const DynamicPriacyPolicy = dynamic(() => import(`../${version}.md`))

  return <MainFramework>
    <Title
      title="隐私政策"
      desc={`${version}版`}
    />
    <div className="px-4 md:px-8 lg:px-16">
      <DynamicPriacyPolicy />
    </div>
  </MainFramework>
}
