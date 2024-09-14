import MainFramework from "@/components/main";
import Title from "@/components/title";
import contributors from "./contributors.json";
import { ContributorCard } from "./components";
import { ContributorInfo } from "./list";

export default function Page() {
  return <MainFramework>
    <Title
      title="关于我们"
      desc="上海应用技术大学小应生活团队"
    />
    <div className="py-2 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {
        contributors.map((info, index) => <ContributorCard
          key={index} info={info as ContributorInfo}
        />)
      }
    </div>
  </MainFramework>
}