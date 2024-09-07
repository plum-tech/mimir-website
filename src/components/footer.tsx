import React, { HTMLAttributeAnchorTarget, ReactNode } from "react"


export interface FooterSection {
  label: string
  items?: FooterSectionItem[]
}
export interface FooterSectionItem {
  label: string
  href?: string
  target?: HTMLAttributeAnchorTarget
}


const FooterSectionItemComp = ({
  label, href, target
}: {
  label?: string
  href?: string
  target?: HTMLAttributeAnchorTarget
}) => {
  return <li className="mb-1">
    <a href={href} target={target} className="hover:underline">{label}</a>
  </li>
}

const FooterSectionComp = ({
  label, items
}: {
  label: string
  items?: FooterSectionItem[]
}) => {
  return <div>
    <h2 className="mb-4 text-lg font-semibold text-gray-900 uppercase">
      {label}
    </h2>
    <ul className="text-gray-700 font-medium">
      {items && items?.map(item => (
        <FooterSectionItemComp
          key={item.label}
          label={item.label}
          href={item.href}
          target={item.target}
        />
      ))}
    </ul>
  </div>
}

export interface QuickContact {
  desc?: string
  href?: string
  icon: ReactNode
  target?: HTMLAttributeAnchorTarget
}

const QuickContactButton = ({
  desc, href, children, target
}: {
  desc?: string
  href?: string
  target?: HTMLAttributeAnchorTarget
  children: ReactNode
}) => {
  return <a href={href} target={target} className="text-gray-400 hover:text-gray-900 ">
    {children}
    {desc ? <span className="sr-only">{desc}</span> : <></>}
  </a>
}
export default function FooterFramework({ sections, children, quickContacts }: {
  sections: FooterSection[]
  quickContacts?: QuickContact[]
  children?: ReactNode
}) {
  return <footer className="text-center">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        {sections && sections?.map(section => (
          <FooterSectionComp
            key={section.label}
            label={section.label}
            items={section.items}
          />
        ))}
      </div>
      <div className="px-4 py-6 md:items-center">
        {
          React.Children.toArray(children).map((child, index) => (
            <span key={`${index}`} className="text-sm text-gray-500 ">
              {child}
            </span>
          ))
        }
      </div>
      <div className="flex flex-row-reverse mb-4 justify-center space-x-5 rtl:space-x-reverse">
        {
          quickContacts?.map(contact => (
            <QuickContactButton
              key={contact.desc}
              desc={contact.desc}
              href={contact.href}
              target={contact.target}>
              {contact.icon}
            </QuickContactButton>
          ))
        }
      </div>
    </div>
  </footer>
}
