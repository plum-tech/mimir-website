import { Card } from "@/components/card"
import { ContributorInfo } from "./list"

export const ContributorCard = ({
  info
}: {
  info: ContributorInfo
}) => {
  return <Card header={info.name}>
    {info.contact.map((contact, index) => <div key={index}>
      {contact.type}: {contact.content}
    </div>)}
    {info.description}
  </Card>
}
