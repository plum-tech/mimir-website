import MainFramework from "@/components/main";
import Title from "@/components/title";
import PrivacyPolicy from "./zh-Hans.md"

export default function Page() {
  return <MainFramework>
    <Title
      title="隐私政策"
      desc=""
    />
    <div className="px-4 md:px-8 lg:px-16">
      <PrivacyPolicy />
    </div>
  </MainFramework>
}