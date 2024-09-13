import * as fs from "fs"
import path from "path";
import { fileURLToPath } from "url";

export const resolveAllVersions = (importMetaUrl: string, ext: string, ...relativePath: string[]) => {
  const _filename = fileURLToPath(importMetaUrl)
  const listDir = path.join(_filename, ...relativePath)
  const li = fs.readdirSync(listDir)
  const versions = li.filter(n => path.extname(n) == ext)
    .map(n => path.basename(n, ext))
    .sort((a, b) => {
      return parseInt(a) - parseInt(b)
    })
    .reverse()
  return versions
}
