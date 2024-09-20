"use client"

import { useMemo } from "react"
import UserAgent from "ua-parser-js"

interface UA extends UserAgent.IResult {
  isWechat: boolean
  isMobile: boolean
  isAndroid: boolean
}

export const useUserAgent = (): UA => {
  const ua = useMemo(() => {
    const parser = new UserAgent()
    return parser.getResult()
  }, [])
  return {
    ...ua,
    isWechat: ua.browser.name?.toLowerCase().includes("wechat") ?? false,
    isMobile: ua.device.type === "mobile",
    isAndroid: ua.os.name?.toLowerCase().includes("android") ?? false,
  }
}