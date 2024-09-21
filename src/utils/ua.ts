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
    isWechat: includes(ua.browser.name, "wechat"),
    isMobile: ua.device.type === "mobile",
    isAndroid: includes(ua.os.name, "android"),
  }
}

const includes = (full: string | undefined, search: string) => {
  return full?.toLowerCase().includes(search) ?? false
}
