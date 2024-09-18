import { Card } from "@/components/card"
import { ContributorInfo } from "./list"
import { ContributorContact } from "./list"


const GreetContributor = ({ contact }: { contact: ContributorContact }) => {
  switch (contact.type) {
    case 'phone':
      return <div>电话：{contact.content}</div>;
    case 'email':
      return <div>
      邮箱： 
      <a href={`mailto:${contact.content}`} className="link">{contact.content}</a>
      </div>;
    case 'qq':
      return <div>QQ: {contact.content}</div>;
    case 'wechat':
      return <div>微信：{contact.content}</div>;
    case 'url':
      return <div>网址：
        <a href={contact.content} className="link">{contact.content}</a>
      </div>
      

  }
};

export const ContributorCard = ({ info }: { info: ContributorInfo }) => {
  return (
    <Card header={info.name}>
      {info.contact.map((contact, index) => (
        <GreetContributor key={index} contact={contact} />
      ))}
      {info.description}
    </Card>
  );
};

