import MainFramework from "@/components/main";
import Title from "@/components/title";
import { ContributorCard } from "./components";
import { ContributorInfo } from "./model";
import { ReactNode } from "react";
import { contributors } from "./contributors";

const activeContributors = contributors.filter(info => !info.endDate);
const historicalContributors = contributors.filter(info => info.endDate);

export default function Page() {
  return <MainFramework>
    <Title
      title="关于我们"
      desc="上海应用技术大学小应生活团队"
    />
    <div className="space-y-2">
      <ContributorGroup title="活跃成员" bgColor="bg-green-500" contributors={activeContributors} />
      <ContributorGroup title="历史成员" bgColor="bg-gray-500" contributors={historicalContributors} />
    </div>
  </MainFramework>
}

const GroupHeader = ({
  bgColor = 'bg-green-500',
  children,
}: {
  width?: string;
  bgColor?: string;
  children?: ReactNode;
}) => {
  return (
    <div className={`${bgColor} rounded-lg`}>
      <p className={`p-3 text-white text-center`}>
        {children}
      </p>
    </div>
  );
};

const ContributorGroup = ({
  title, contributors, bgColor = "bg-green-500"
}: {
  title: string
  bgColor?: string
  contributors: ContributorInfo[]
}) => {
  return <>
    <GroupHeader width="w-96" bgColor={bgColor}>
      {title}
    </GroupHeader>
    <div className="py-2 grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {contributors.map((info, index) => (
        <ContributorCard key={index} info={info as ContributorInfo} />
      ))}
    </div>
  </>
}