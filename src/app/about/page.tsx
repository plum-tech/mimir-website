import MainFramework from "@/components/main";
import Title from "@/components/title";
import contributors from "./contributors.json";
import { ContributorCard } from "./components";
import { PText } from "./components";
import { ContributorInfo } from "./list";

const activeContributors = contributors.filter(info => !info.endDate);
const historicalContributors = contributors.filter(info => info.endDate);

export default function Page() {
  return <MainFramework>
    <Title
      title="关于我们"
      desc="上海应用技术大学小应生活团队"
    />
    <div className="space-y-2">
      <PText width="w-96" bgColor="bg-green-500" text="活跃成员" />
      <div className="py-2 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* 渲染活跃用户 */}
        {activeContributors.map((info, index) => (
          <ContributorCard key={index} info={info as ContributorInfo} />
        ))}
      </div>

      <PText width="w-96" bgColor="bg-gray-500" text="历史成员" />
      <div className="py-2 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* 渲染历史用户 */}
        {historicalContributors.map((info, index) => (
          <ContributorCard key={index} info={info as ContributorInfo} />
        ))}
      </div>
    </div>
  </MainFramework>
}