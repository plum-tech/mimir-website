export interface Artifact {
  version: string
  release_time: string
  release_note: string
  downloads: Record<string, ArtifactDownload>
}

export interface ArtifactDownload {
  name: string
  default: string
  sha256: string
  url: Record<string, string>
}

export const getFirstAvailableDownload = (
  downloads: ArtifactDownload, order?: string[]
) => {
  order ??= [downloads.default]
  for (const src of order) {
    const url = downloads.url[src]
    if (url) return url
  }
  return downloads.url[downloads.default]
}