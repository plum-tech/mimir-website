export type ContributorContact = {
  type: "phone" | "email" | "qq" | "wechat"
  content: string
} | {
  type: "url"
  label: string
  content: string
}

export interface ContributorInfo {
  name: string
  contact: ContributorContact[]
  description: string
  startDate: string
  endDate?: string
}
