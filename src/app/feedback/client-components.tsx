"use client"

export const FeedbackArea = () => {
  return <form className="w-3/4 h-50 max-w-[600px]" onSubmit={()=>{
    alert("感谢反馈")
  }}>
    <div className="border border-gray-200 rounded-lg bg-gray-50">
      <div className="px-4 py-2 bg-white rounded-t-lg">
        <textarea id="comment"
          className="w-full px-0 text-sm text-gray-900 bg-white border-0 "
          placeholder="留下你的意见..."
          required >
        </textarea>
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t">
        <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg">
          提交
        </button>

      </div>
    </div>
  </form>

}