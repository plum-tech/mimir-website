import env from "@liplum/env/next"
import lateinit from "@liplum/lateinit"
import { jwtVerify, } from 'jose'

export const mimirTokenSecret = lateinit(() => {
  return env("MIMIR_JWT_SECRET")
    .string({ default: env.NODE_ENV.development ? "test-access" : undefined }).get()
})

export interface MimirPayload {
  id: string
}

const validateMimirPayload = (payload: any): payload is MimirPayload => {
  if (typeof payload !== "object") return false
  if (typeof payload.id !== "string") return false
  return true
}

export const verifyMimirToken = async (
  token: string, secret: string = mimirTokenSecret()
): Promise<MimirPayload | undefined> => {
  const { payload } = await jwtVerify(token, new TextEncoder().encode(secret))
  if (validateMimirPayload(payload)) {
    return payload
  }
}
