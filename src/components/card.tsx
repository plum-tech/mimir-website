import { ReactNode } from "react";

export const Card = ({
  children, header, footer
}: {
  header?: ReactNode
  footer?: ReactNode
  children: ReactNode
}) => {
  return <div className="block max-w-sm p-6 bg-slate-50 rounded-2xl">
    {header && <div className="pb-4">{header}</div>}
    {children}
    {footer && <div className="pt-4">{footer}</div>}
  </div>
}