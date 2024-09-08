import MainFramework from "@/components/main";
import Title from "@/components/title";
import ContentZhHans from "./zh-Hans.mdx"

export default function Page() {
  return <MainFramework>
    <Title
      title="服务条款"
      desc=""
    />
    <div className="px-4 md:px-8 lg:px-16">
      <ContentZhHans />
    </div>
  </MainFramework>
}