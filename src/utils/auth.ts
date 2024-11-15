import env from "@liplum/env/next"
import jwt, { Secret } from "jsonwebtoken"

export const mimirTokenSecret = env("MIMIR_JWT_SECRET")
  .string({ default: env.NODE_ENV.development ? "test-access" : undefined }).get()

export interface MimirPayload {
  id: string
}

const validateMimirPayload = (payload: any): payload is MimirPayload => {
  if (typeof payload !== "object") return false
  if (typeof payload.id !== "string") return false
  return true
}

export const verify = async (
  token: string, secret: Secret
): Promise<MimirPayload | undefined> => {
  return new Promise<MimirPayload | undefined>((resolve, reject) => {
    jwt.verify(token, secret, { complete: true }, (err, info) => {
      if (err || info === undefined) {
        resolve(undefined)
      } else {
        const payload = info.payload
        if (validateMimirPayload(payload)) {
          resolve(payload)
        }
        resolve(undefined)
      }
    })
  })
}

export const verifySync = (
  token: string, secret: Secret
): MimirPayload | undefined => {
  try {
    const info = jwt.verify(token, secret, { complete: true })
    const payload = info.payload
    if (validateMimirPayload(payload)) {
      return payload
    }
  } catch {
    return
  }
}
