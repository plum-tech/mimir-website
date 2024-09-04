import { HTMLAttributeAnchorTarget } from "react"

export const LinkButton = ({
  children, href, target
}: {
  children: string
  href?: string
  target?: HTMLAttributeAnchorTarget
}) => {
  return <div className="inline-block bg-[#1c734f] hover:bg-[#166242] focus:ring-blue-300 rounded-2xl px-5 py-2.5">
    <a href={href} target={target} className="text-white font-medium text-sm">
      {children}
    </a>
  </div>

}