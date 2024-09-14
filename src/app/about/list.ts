interface ContributorContact {
  type: "phone" | "email" | "qq" | "wechat" | "url"
  content: string
}
interface ContributorInfo {
  name: string
  contact: ContributorContact | ContributorContact[]
  description: string
  startDate: string
  endDate?: string
}

export const contributors: ContributorInfo[] = [
  {
    "name": "MK学姐",
    "contact": [
      {
        "type": "qq",
        "content": "734376734"
      },
      {
        "type": "email",
        "content": "734376734@qq.com"
      },
    ],
    "description": "小应生活负责人，宣传，招募，小应生活初创人",
    "startDate": "2024-08"
  },
  {
    "name": "Liplum",
    "contact": {
      "type": "email",
      "content": "Li_plum@outlook.com"
    },
    "description": "小应生活开发，小应社区开发，小应生活初创人",
    "startDate": "2024-08"
  },
  {
    "name": "Francesco_W",
    "contact": {
      "type": "qq",
      "content": "1239878015"
    },
    "description": "人员招募，资金支持，小应生活初创人",
    "startDate": "2023-08"
  },
  {
    "name": "伍振浩",
    "contact": {
      "type": "qq",
      "content": "2321141691"
    },
    "description": "部分爬虫和数据处理",
    "startDate": "2023-09",
    "endDate": "2024-06"
  },
  {
    "name": "Gracie",
    "contact": {
      "type": "wechat",
      "content": "pp9_1026"
    },
    "description": "软件UI设计，ICON设计，小应生活初创人",
    "startDate": "2023-09",
    "endDate": "2024-06"
  },
  {
    "name": "洛狼狼",
    "contact": {
      "type": "qq",
      "content": "3051467276"
    },
    "description": "软件测试",
    "startDate": "2023-10"
  },
  {
    "name": "Henry",
    "contact": {
      "type": "email",
      "content": "HenrySky64@outlook.com"
    },
    "description": "娱乐小游戏扫雷部分开发，宣传",
    "startDate": "2023-12",
    "endDate": "2024-01"
  },
  {
    "name": "间墨",
    "contact": [
      {
        "type": "qq",
        "content": "1214300025"
      },
      {
        "type": "email",
        "content": "wotsginger@outlook.com"
      },
    ],
    "description": "服务器支持，部分小应社区开发",
    "startDate": "2024-3"
  }
]