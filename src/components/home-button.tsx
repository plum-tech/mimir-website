import { HTMLAttributeAnchorTarget, ReactNode } from "react"

export default function HomeButton({
  title, href, target, children
}: {
  title: ReactNode
  children: ReactNode
  href?: string
  target?: HTMLAttributeAnchorTarget
}) {
  return <div className="group rounded-2xl border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-slate-100 bg-slate-50 m-1">
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
    >
      <h2 className="mb-3 text-2xl font-semibold">
        {`${title} `}
        {href && <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>}
      </h2>
      <p className="m-0 max-w-[30ch] text-sm opacity-60">
        {children}
      </p>
    </a>
  </div>
}
export interface IHomeButton {
  title: string,
  desc: string,
  href: string,
}
export const HomeButtonGroup = ({
  actions
}: {
  actions: IHomeButton[]
}) => {
  return <div className="grid grid-cols-2 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left space-x-2 px-4">
    {
      actions.map((action, index) => (
        <HomeButton
          key={index}
          title={action.title}
          href={action.href}>
          {action.desc}
        </HomeButton>
      ))
    }
  </div>
}