import { ReactNode } from "react";

export const Card = ({
  children, header, footer
}: {
  header?: ReactNode
  footer?: ReactNode
  children: ReactNode
}) => {
  return <div className="block p-6 bg-slate-50 rounded-2xl max-w-sm lg:max-w-full">
    {header && <div className="pb-4">{header}</div>}
    {children}
    {footer && <div className="pt-4">{footer}</div>}
  </div>
}