export interface ContributorContact {
  type: "phone" | "email" | "qq" | "wechat" | "url"
  content: string
}

export interface ContributorInfo {
  name: string
  contact: ContributorContact[]
  description: string
  startDate: string
  endDate?: string
}
