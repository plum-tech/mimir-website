"use client"

import { useMemo } from "react"
import UserAgent from "ua-parser-js"

interface UA extends UserAgent.IResult {
  isQQ: boolean
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
    isQQ: equal(ua.browser.name, "qq"),
    isWechat: includes(ua.browser.name, "wechat"),
    isMobile: ua.device.type === "mobile",
    isAndroid: includes(ua.os.name, "android"),
  }
}

const includes = (full: string | undefined, search: string) => {
  return full?.toLowerCase().includes(search) ?? false
}

const equal = (a: string | undefined, b: string) => {
  return a?.toLowerCase() === b
}