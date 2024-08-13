import MainFramework from "@/components/main";
import Title from "@/components/title";
import PrivacyPolicy from "./privacy-policy.mdx"

export default function Page() {
  return <MainFramework>
    <Title
      title="隐私政策"
      desc=""
    />
    <div className="">
      <PrivacyPolicy />
    </div>
  </MainFramework>
}