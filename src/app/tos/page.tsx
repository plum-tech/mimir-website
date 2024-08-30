import MainFramework from "@/components/main";
import Title from "@/components/title";
import ToS from "./tos.mdx"

export default function Page() {
  return <MainFramework>
    <Title
      title="使用协议"
      desc=""
    />
    <div className="px-4 md:px-8 lg:px-16">
      <ToS />
    </div>
  </MainFramework>
}