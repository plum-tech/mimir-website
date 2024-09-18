import { Card } from "@/components/card"
import { ContributorInfo } from "./list"
import { ContributorContact } from "./list"


const GreetContributor = ({ contact }: { contact: ContributorContact }) => {
  switch (contact.type) {
    case 'phone':
      return <div>phone : {contact.content}</div>;
    case 'email':
      return <div>
      email : 
      <a href={`mailto:}${contact.content}`} className="link">{contact.content}</a>
      </div>;
    case 'qq':
      return <div>qq : {contact.content}</div>;
    case 'wechat':
      return <div>wechat : {contact.content}</div>;
    case 'url':
      return <a href={contact.content} className="block">url : {contact.content}</a>;;

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

