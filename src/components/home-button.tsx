import { HTMLAttributeAnchorTarget, ReactNode } from "react"

export default function HomeButton({
  title, href, target, children
}: {
  title: ReactNode
  children: ReactNode
  href?: string
  target?: HTMLAttributeAnchorTarget
}) {
  return <a
    href={href}
    target={target}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-slate-100 bg-slate-50 m-1"
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
}