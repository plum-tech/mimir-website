"use client"

import { useUserAgent } from "@/utils/ua"
import { Card } from "./card"

import {
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline'
export const WechatOpenInBrowserOverlay = () => {
  const ua = useUserAgent()
  if (!(ua.isMobile && ua.isWechat && ua.isAndroid)) return <></>
  return <div className='overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full bg-black/80'>
    <div className="absolute inset-y-8 inset-x-0 w-3/4 mx-auto">
      <Card>
        <p>
          安卓用户请点击右上角的 <EllipsisHorizontalIcon width={20} className="inline" /> <br />
          选择”在浏览器中打开“<br />
          然后下载应用
        </p>
      </Card>
    </div>
  </div>
}