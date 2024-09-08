import MainFramework from "@/components/main";
import Title from "@/components/title";
import TermsOfServices from "./zh-Hans.md"
import { redirect } from "next/navigation";

export default function Page() {
  return redirect("/tos/20240915")
  
  return <MainFramework>
    <Title
      title="服务条款"
      desc=""
    />
    <div className="px-4 md:px-8 lg:px-16">
      <TermsOfServices />
    </div>
  </MainFramework>
}