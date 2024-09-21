export type ReleaseNote = {
  "zh-Hans": string;
  en?: string | undefined;
}

export type AndroidAssets = {
  fileName: string;
  defaultSrc: string;
  src: Record<string, string>;
}

export enum ImportanceLevel {
  critical = "critical",
  high = "high",
  normal = "normal",
  low = "low",
}

export type VersionInfo = {
  version: string
  time: string
  importance: ImportanceLevel
  releaseNote: ReleaseNote
  assets: {
    Android: AndroidAssets
  }
  delayInMinute: number
}
