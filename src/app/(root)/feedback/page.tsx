import MainFramework from "@/components/main";
import Title from "@/components/title";
import { FeedbackArea } from "./client-components";

export default function Page() {
  return <MainFramework>
    <Title
      title="意见反馈"
      desc={<>
        您需知晓：我们非常重视您的信息安全，<br />
        我们不会将您的个人信息分享给第三方，并仅用于向您回复反馈处理结果。
      </>}
    />
    <FeedbackArea />
  </MainFramework>
}
