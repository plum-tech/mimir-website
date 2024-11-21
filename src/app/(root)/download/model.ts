export enum ImportanceLevel {
  critical = "critical",
  high = "high",
  normal = "normal",
  low = "low",
}

export enum AndroidAbi {
  arm64 = "arm64",
  arm32 = "arm32",
  x86_64 = "x86_64",
}

export interface PerAbiSrc {
  abi: AndroidAbi
  url?: string
}

export interface InstallerSrc {
  installer: string
  url?: string
}

export interface ReleaseNote {
  "zh-Hans": string
  en?: string | undefined
}

export interface AndroidVersionInfo {
  version: string
  createdAt: Date
  importance: ImportanceLevel
  defaultSrc: string
  releaseNote: ReleaseNote
  perAbiSrc: PerAbiSrc[]
  perInstallerSrc: InstallerSrc[]
}