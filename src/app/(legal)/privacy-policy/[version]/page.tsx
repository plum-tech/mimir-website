import MainFramework from "@/components/main"
import Title from "@/components/title"
import dynamic from 'next/dynamic'
import { redirect } from "next/navigation"
import { privacyPolicyVersions } from "../version"


export default async function Page({
  params
}: {
  params: { version: string }
}) {
  const { version } = params
  if (!privacyPolicyVersions.includes(version)) {
    return redirect(`/privacy-policy/${privacyPolicyVersions[0]}`)
  }
  const DynamicPriacyPolicy = dynamic(() => import(`../list/${version}.md`), {
    ssr: true
  })

  return <MainFramework>
    <Title
      title="小应生活隐私政策"
      desc={`${version}版`}
    />
    <div className="px-4 md:px-8 lg:px-16">
      <DynamicPriacyPolicy />
    </div>
  </MainFramework>
}
