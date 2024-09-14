import MainFramework from "@/components/main";
import Title from "@/components/title";

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

const FeedbackArea = () => {
  return <form className="w-2/4 h-50">
    <div className="border border-gray-200 rounded-lg bg-gray-50">
      <div className="px-4 py-2 bg-white rounded-t-lg">
        <textarea id="comment" className="w-full px-0 text-sm text-gray-900 bg-white border-0  dark:text-white" placeholder="留下你的意见..." required ></textarea>
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t">
        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg">
          提交
        </button>

      </div>
    </div>
  </form>

}