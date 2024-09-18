import MainFramework from "@/components/main";
import Title from "@/components/title";
import contributors from "./contributors.json";
import { ContributorCard } from "./components";
import { ContributorInfo } from "./list";
const activeContributors = contributors.filter(info => !info.endDate);
const historicalContributors = contributors.filter(info => info.endDate);
export default function Page() {
  return <MainFramework>
    <Title
      title="关于我们"
      desc="上海应用技术大学小应生活团队"
    />
    <p className="block w-96 p-3 bg-green-500 text-white text-center rounded-lg shadow-md">活跃成员</p>
    <br/>
    <div className="py-2 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* 渲染活跃用户 */}
        
        {activeContributors.map((info, index) => (
          <ContributorCard key={index} info={info as ContributorInfo} />
        ))}
      </div>
      <br/>
      <p className="block w-96 p-3 bg-gray-500 text-white text-center rounded-lg shadow-md">历史成员</p>
      <br/>
      <div className="py-2 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {/* 渲染历史用户 */}
        {historicalContributors.map((info, index) => (
          <ContributorCard key={index} info={info as ContributorInfo} />
        ))}
      </div>
  </MainFramework>
}