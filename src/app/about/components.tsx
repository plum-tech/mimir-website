import { Card } from "@/components/card"
import { ContributorInfo } from "./list"
import { ContributorContact } from "./list"


const ContributorContactRow = ({ contact }: { contact: ContributorContact }) => {
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
}

export const ContributorCard = ({ info }: { info: ContributorInfo }) => {
  return (
    <Card header={info.name}>
      {info.contact.map((contact, index) => (
        <ContributorContactRow key={index} contact={contact} />
      ))}
      {info.description}
    </Card>
  )
}

export interface PMembersProps {
  width?: string;
  bgColor?: string;
  text?: string;
}

export const PText: React.FC<PMembersProps> = ({ width = 'w-40', bgColor = 'bg-green-500', text = '活跃成员' }) => {
  return (
    <div className={width}>
      <br />
      <p className={`block ${width} p-3 ${bgColor} text-white text-center rounded-lg shadow-md`}>
        {text}
      </p>
      <br />
    </div>
  );
};

export default PText;